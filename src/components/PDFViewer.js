'use client'

import { useState } from "react"

export default function PDFViewer({ file }) {
  const [error, setError] = useState(false)

  return (
    <div
      className="w-full flex flex-col items-center"
      onContextMenu={e => e.preventDefault()}
      onDragStart={e => e.preventDefault()}
      style={{ userSelect: "none" }}
    >
      {!error ? (
        <iframe
          src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
          width="100%"
          height="600px"
          className="rounded-xl border shadow"
          title="PDF File"
          style={{ minHeight: 400, maxWidth: 700, pointerEvents: 'auto' }}
          allowFullScreen
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-center text-red-500 font-semibold py-12">
          PDF tidak bisa ditampilkan.<br />
          Jika anda menggunakan Internet Download Manager (IDM), <br />
          matikan fitur download otomatis untuk file PDF.
        </div>
      )}
    </div>
  )
}
