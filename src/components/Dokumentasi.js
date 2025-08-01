'use client'
import { useState } from "react"

// Data dokumentasi per kegiatan (isi sesuai folder kamu)
const activities = [
  {
    title: "Bersama Direktur PT Keong Nusantara Abadi ( Wongcoco Group)",
    images: [
      "/images/dokumentasi/kg1.1.png",
      "/images/dokumentasi/kg1.2.png"
    ]
  },
  {
    title: "Pengarahan Teknis IPAL PT Keong Nusantara Abadi Natar",
    images: [
      "/images/dokumentasi/kg2.1.png",
      "/images/dokumentasi/kg2.2.png"
    ]
  },
  {
    title: "Pengarahan Teknis IPAL PT Keong Nusantara Abadi NatarPelatihan “ BUDIDAYA BAKTERI PROBIOTIK “ Pada Team IPAL PT.KEONG NUSANTARA ABADI",
    images: [
      "/images/dokumentasi/kg3.1.png",
      "/images/dokumentasi/kg3.2.png"
    ]
  },
  {
    title: "Pemakaian pupuk organik oleh petani padi di provinsi Lampung",
    images: [
      "/images/dokumentasi/kg4.1.png",
      "/images/dokumentasi/kg4.2.png",
      "/images/dokumentasi/kg4.3.png",
      "/images/dokumentasi/kg4.4.png"
    ]
  },
  // Tambahkan kegiatan lain di sini
]

export default function Dokumentasi() {
  const [zoomImg, setZoomImg] = useState(null)

  // Slide index per kegiatan (array)
  const [slideIndex, setSlideIndex] = useState(Array(activities.length).fill(0))

  function nextSlide(idx) {
    setSlideIndex(prev =>
      prev.map((v, i) => i === idx ? (v + 1) % activities[idx].images.length : v)
    )
  }
  function prevSlide(idx) {
    setSlideIndex(prev =>
      prev.map((v, i) => i === idx ? (v - 1 + activities[idx].images.length) % activities[idx].images.length : v)
    )
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600 text-center">Dokumentasi Kegiatan</h2>

      <div className="flex flex-col gap-10">
        {activities.map((act, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-elegant p-6">
            <h3 className="font-semibold text-lg text-orange-700 mb-4">{act.title}</h3>
            <div className="flex items-center justify-center gap-3">
              {act.images.length > 1 && (
                <button
                  onClick={() => prevSlide(idx)}
                  className="px-2 py-1 text-xl font-bold rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200"
                  aria-label="Sebelumnya"
                >&lt;</button>
              )}
              <div className="relative">
                <img
                  src={act.images[slideIndex[idx]]}
                  alt={act.title + ` - ${slideIndex[idx]+1}`}
                  className="h-64 w-auto max-w-xs object-contain rounded-lg shadow cursor-pointer transition hover:scale-105"
                  onClick={() => setZoomImg(act.images[slideIndex[idx]])}
                  loading="lazy"
                />
                {/* Indikator */}
                {act.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {act.images.map((_, i) => (
                      <span
                        key={i}
                        className={`block w-2 h-2 rounded-full ${i === slideIndex[idx] ? 'bg-orange-500' : 'bg-orange-200'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              {act.images.length > 1 && (
                <button
                  onClick={() => nextSlide(idx)}
                  className="px-2 py-1 text-xl font-bold rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200"
                  aria-label="Selanjutnya"
                >&gt;</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom Gambar */}
      {zoomImg && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setZoomImg(null)}
        >
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img
              src={zoomImg}
              alt="Zoom"
              className="max-h-[90vh] max-w-[95vw] rounded-xl border-4 border-white shadow-2xl"
            />
            <button
              className="absolute -top-4 -right-4 bg-white text-orange-700 hover:text-orange-900 text-3xl rounded-full shadow p-2"
              onClick={() => setZoomImg(null)}
              aria-label="Tutup"
            >&times;</button>
          </div>
        </div>
      )}
    </section>
  )
}
