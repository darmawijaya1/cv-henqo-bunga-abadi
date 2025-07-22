'use client'

export default function PDFViewer({ file }) {
  if (!file) return null

  return (
    <div className="w-full h-full flex justify-center items-center">
      <iframe
        src={`${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        className="w-full h-full rounded-xl border shadow"
        title="PDF File"
        allowFullScreen
        style={{
          minHeight: 0,
          minWidth: 0,
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  )
}
