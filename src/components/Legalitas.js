'use client'
import { useState } from "react"
import dynamic from "next/dynamic"

// Dynamic import agar hanya dijalankan di browser, BUKAN saat build SSR
const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false })

const LEGALITAS = [
  {
    title: "NPWP",
    img: "/images/legalitas/npwp.png",
    pdf: "/pdf/legalitas/npwp.pdf"
  },
  {
    title: "Akta Pendirian CV",
    img: "/images/legalitas/akta.png",
    pdf: "/pdf/legalitas/akta.pdf"
  },
  {
    title: "SK MENKUMHAM",
    img: "/images/legalitas/sk-menkumham.png",
    pdf: "/pdf/legalitas/sk-menkumham.pdf"
  }
]

export default function Legalitas() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPDF, setSelectedPDF] = useState(null)

  function openModal(pdf) {
    setSelectedPDF(pdf)
    setModalOpen(true)
  }
  function closeModal() {
    setModalOpen(false)
    setSelectedPDF(null)
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">Legalitas & Legal Form</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {LEGALITAS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-elegant p-4 text-center hover:shadow-xl transition cursor-pointer"
            onClick={() => openModal(item.pdf)}
          >
            <img src={item.img} alt={item.title} className="rounded-lg shadow mb-2 mx-auto h-32 object-contain"/>
            <p className="font-semibold">{item.title}</p>
            <span className="text-xs text-orange-600 underline">Lihat PDF</span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed z-50 inset-0 bg-black/60 flex items-center justify-center" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-4 relative" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-orange-600 hover:text-orange-900 text-xl"
              onClick={closeModal}
            >&times;</button>
            {/* PDFViewer hanya dirender di browser! */}
            <PDFViewer file={selectedPDF} />
          </div>
        </div>
      )}
    </section>
  )
}
