'use client'
import { Construction, Leaf, Globe, Briefcase } from "lucide-react"

const SERVICES = [
  {
    icon: <Briefcase size={42} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" />,
    title: "Konsultan Teknik & Lingkungan",
    desc: "Spesialis WTP (Water Treatment Plan) & WWTP (Waste Water Treatment Plan)",
  },
  {
    icon: <Construction size={42} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" />,
    title: "Kontraktor & Perdagangan Umum",
    desc: "Pelaksanaan proyek konstruksi (industri, infrastruktur).",
  },
  {
    icon: <Leaf size={42} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" />,
    title: "Microba / Bakteri Probiotik",
    desc: "Pembuatan mikroba bakteri baik untuk industri dan lingkungan berkelanjutan.",
  },
]

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-orange-600 text-center tracking-tight">
        Layanan Kami
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((srv) => (
          <div
            key={srv.title}
            className="group bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border border-transparent hover:border-orange-400 relative overflow-hidden flex flex-col items-center text-center min-h-[280px] animate-fadein"
          >
            <div className="mb-4">{srv.icon}</div>
            <h3 className="text-lg font-semibold text-orange-700 mb-3">{srv.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{srv.desc}</p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-orange-400 to-orange-200 rounded-3xl pointer-events-none"></div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fadein {
          animation: fadein 0.7s ease-out both;
        }
      `}</style>
    </section>
  )
}
