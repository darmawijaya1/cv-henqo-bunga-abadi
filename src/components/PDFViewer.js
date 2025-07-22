'use client'
import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className="flex flex-col items-center">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-center py-8">Loading PDF...</div>}
      >
        <Page pageNumber={pageNumber} width={500}/>
      </Document>
      <div className="flex justify-between items-center mt-4 gap-2">
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
  )
}
