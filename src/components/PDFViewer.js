'use client'

export default function PDFViewer({ file }) {
  if (!file) return null

  return (
    <div
      className="w-full flex flex-col items-center"
      onContextMenu={e => e.preventDefault()}
      onDragStart={e => e.preventDefault()}
      style={{ userSelect: "none" }}
    >
      <iframe
        src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
        width="100%"
        height="600px"
        className="rounded-xl border shadow"
        title="PDF File"
        style={{ minHeight: 400, maxWidth: 700, pointerEvents: 'auto' }}
        allowFullScreen
      />
      {/* Tidak ada tombol download */}
    </div>
  )
}
