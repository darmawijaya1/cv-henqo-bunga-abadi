'use client'
import { useState } from 'react'
import Slider from 'react-slick'

const products = [
  {
    name: "IPAL (Instalasi Pengolahan Air Limbah)",
    images: [
      "/images/produk/Pot samping IPAL.png",
      "/images/produk/DIAGRAM PROSES IPAL.png",
    ],
    pdf: "/pdf/produk/DIAGRAM PROSES IPAL.pdf"
  },
  {
    name: "Water Treatmen",
    images: [
      "/images/produk/Water1.png",
      "/images/produk/Water2.png",
    ],
    pdf: "/pdf/produk/Water.pdf"
  },
  {
    name: "Probiotik Super Azolla",
    images: [
      "/images/produk/Probiotik Super Azolla.jpg",
      "/images/produk/Produk.jpg",
    ],
    pdf: "/pdf/produk/Probiotik Super Azolla.pdf"
  },
  {
    name: "MicroBio Bacteri Super Azolla",
    images: [
      "/images/produk/MicroBio Bacteri Super Azolla.jpg",
      "/images/produk/Produk.jpg",
    ],
    pdf: "/pdf/produk/MicroBio Bacteri Super Azolla.pdf"
  },
  // Tambahkan produk lain sesuai kebutuhan...
]

export default function Produk() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState('')

  // Setting slider untuk gambar di tiap produk (bukan slide produk)
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-elegant hover:shadow-2xl transition p-5 flex flex-col items-center">
            <div className="w-full mb-3">
              <Slider {...imageSliderSettings}>
                {prod.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`${prod.name} foto ${i+1}`}
                      className="h-56 w-auto mx-auto object-contain rounded-lg shadow cursor-pointer border-2 border-orange-200"
                      onClick={() => handleOpen(prod.pdf, prod.name)}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="font-semibold text-orange-700 mb-1 text-center">{prod.name}</div>
            <button
              className="mt-2 px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition font-bold"
              onClick={() => handleOpen(prod.pdf, prod.name)}
            >
              Lihat Detail Produk
            </button>
          </div>
        ))}
      </div>

      {/* MODAL PDF */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-4 relative"
            style={{
              width: "98vw",
              maxWidth: 850,
              maxHeight: "90vh",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-3xl text-orange-600 font-bold hover:text-orange-900"
              onClick={handleClose}
            >&times;</button>
            <h3 className="mb-3 text-xl font-bold text-orange-700 text-center">{selectedTitle}</h3>
            <iframe
              src={selectedPdf}
              title="Detail Produk"
              width="100%"
              height="500"
              style={{
                minHeight: 350,
                maxHeight: "70vh",
                width: "100%",
                borderRadius: "16px",
                border: "2px solid #fdba74",
                background: "#fff",
              }}
              className="border"
            />
          </div>
        </div>
      )}

      {/* SLICK CSS */}
      <style global jsx>{`
        @import "~slick-carousel/slick/slick.css";
        @import "~slick-carousel/slick/slick-theme.css";
        .product-image-slider .slick-dots li button:before {
          color: #fb923c !important;
        }
      `}</style>
    </section>
  )
}
