'use client'
import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const LEGALITAS = [
  {
    title: "NPWP",
    img: "/images/legalitas/npwp.jpg",
    pdf: "/pdf/legalitas/npwp.pdf"
  },
  {
    title: "Akta Pendirian CV",
    img: "/images/legalitas/akta.jpg",
    pdf: "/pdf/legalitas/akta.pdf"
  },
  {
    title: "SK MENKUMHAM",
    img: "/images/legalitas/sk-menkumham.jpg",
    pdf: "/pdf/legalitas/sk-menkumham.pdf"
  }
]

export default function Legalitas() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPDF, setSelectedPDF] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function openModal(pdf) {
    setSelectedPDF(pdf)
    setModalOpen(true)
    setPageNumber(1)
  }
  function closeModal() {
    setModalOpen(false)
    setSelectedPDF(null)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
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
            <Document
              file={selectedPDF}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-center py-8">Loading PDF...</div>}
            >
              <Page pageNumber={pageNumber} width={500}/>
            </Document>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="px-4 py-1 rounded bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 disabled:opacity-50"
              >Prev</button>
              <span className="text-sm font-medium">
                Halaman {pageNumber} dari {numPages}
              </span>
              <button
                onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="px-4 py-1 rounded bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 disabled:opacity-50"
              >Next</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
