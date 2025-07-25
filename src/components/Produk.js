'use client'
import { useState } from 'react'
import Slider from 'react-slick'

// Data produk
const products = [
  {
    name: "Probiotik Super Azolla",
    image: "/images/produk/Probiotik Super Azolla.jpg",
    pdf: "/pdf/produk/Probiotik Super Azolla.pdf"
  },
  {
    name: "MicroBio Bacteri Super Azolla",
    image: "/images/produk/MicroBio Bacteri Super Azolla.jpg",
    pdf: "/pdf/produk/MicroBio Bacteri Super Azolla.pdf"
  },
]

export default function Produk() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 600, settings: { slidesToShow: 1 }},
    ]
  }

  function handleOpen(pdf, name) {
    setSelectedPdf(pdf)
    setSelectedTitle(name)
    setOpenModal(true)
  }
  function handleClose() {
    setOpenModal(false)
    setSelectedPdf(null)
    setSelectedTitle('')
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600 text-center">Produk Kami</h2>
      <Slider {...settings}>
        {products.map((prod, idx) => (
          <div key={idx} className="px-3">
            <div className="bg-white rounded-2xl shadow-elegant hover:shadow-2xl transition p-5 flex flex-col items-center">
              <img
                src={prod.image}
                alt={prod.name}
                className="h-48 w-auto object-contain mb-3 rounded-lg shadow cursor-pointer border-2 border-orange-200"
                onClick={() => handleOpen(prod.pdf, prod.name)}
                loading="lazy"
              />
              <div className="font-semibold text-orange-700 mb-1 text-center">{prod.name}</div>
              <button
                className="mt-2 px-4 py-1 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
                onClick={() => handleOpen(prod.pdf, prod.name)}
              >
                Lihat Detail Produk
              </button>
            </div>
          </div>
        ))}
      </Slider>
      {/* MODAL PDF */}
      {openModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" onClick={handleClose}>
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-4 relative" style={{ maxHeight: "90vh" }} onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-3 text-3xl text-orange-600 font-bold hover:text-orange-900" onClick={handleClose}>&times;</button>
            <h3 className="mb-3 text-xl font-bold text-orange-700 text-center">{selectedTitle}</h3>
            <iframe
              src={selectedPdf}
              title="Detail Produk"
              width="100%"
              height="500px"
              className="rounded-xl border"
              style={{ minHeight: 350, width: "100%" }}
            />
          </div>
        </div>
      )}
      {/* SLICK CSS */}
      <style global jsx>{`
        @import "~slick-carousel/slick/slick.css";
        @import "~slick-carousel/slick/slick-theme.css";
      `}</style>
    </section>
  )
}
