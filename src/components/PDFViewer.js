'use client'

export default function PDFViewer({ file }) {
  if (!file) return null

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={file}
        width="100%"
        height="600px"
        className="rounded-xl border shadow"
        title="PDF File"
        style={{ minHeight: 400, maxWidth: 700 }}
        allowFullScreen
      />
    </div>
  )
}
