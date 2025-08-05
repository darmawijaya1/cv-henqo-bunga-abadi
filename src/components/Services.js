'use client'
import { Construction, Leaf, Globe, Briefcase } from "lucide-react"

const SERVICES = [
  {
    icon: <Briefcase size={38} className="text-orange-500 mb-2" />,
    title: "Konsultan Teknik & Lingkungan",
    desc: "Konsultasi teknik manajemen industri, pengelolaan limbah, analisis dampak lingkungan, dan efisiensi produksi.",
  },
  {
    icon: <Construction size={38} className="text-orange-500 mb-2" />,
    title: "Kontraktor & Perdagangan Umum",
    desc: "Pelaksanaan proyek konstruksi skala besar (industri, infrastruktur, bangunan umum).",
  },
  {
    icon: <Leaf size={38} className="text-orange-500 mb-2" />,
    title: "Microba / Bakteri Probiotik",
    desc: "Pembuatan mikroba bakteri baik",
  },
]

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-extrabold mb-10 text-orange-600 text-center tracking-tight">
        Layanan Kami
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {SERVICES.map((srv) => (
          <div
            key={srv.title}
            className="group bg-white rounded-2xl shadow-elegant p-8 transition hover:shadow-2xl hover:-translate-y-2 duration-300 relative overflow-hidden flex flex-col items-center text-center min-h-[280px] animate-fadein"
          >
            <div className="flex items-center justify-center mb-2">{srv.icon}</div>
            <h3 className="text-xl font-bold text-orange-700 mb-2">{srv.title}</h3>
            <p className="text-gray-700 mb-3">{srv.desc}</p>
            <div className="opacity-0 group-hover:opacity-100 transition absolute inset-0 flex flex-col justify-end items-center bg-orange-50 bg-opacity-90 px-6 pb-6 pointer-events-none">
              <span className="text-orange-700 font-semibold text-sm">Edukasi:</span>
              <p className="text-xs text-gray-800 mt-1">{srv.edukasi}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fadein {
          animation: fadein 0.8s cubic-bezier(.4,2,.6,1) both;
        }
      `}</style>
    </section>
  )
}
