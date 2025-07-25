import { Briefcase, Leaf, TrendingUp, Sparkles } from "lucide-react"

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-orange-100 backdrop-blur-sm">
        {/* Decorative Gradients & Icons */}
        <div className="absolute -top-10 -left-10 w-52 h-52 bg-gradient-to-br from-orange-200 via-orange-50 to-white rounded-full blur-2xl opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <Leaf size={130} className="text-orange-300" />
        </div>
        <div className="absolute left-4 top-4 opacity-30 animate-pulse">
          <Sparkles size={36} className="text-orange-300" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 text-orange-600 tracking-tight flex items-center gap-3">
          <Briefcase size={40} className="text-orange-500 drop-shadow" />
          Tentang Kami
        </h2>

        {/* Optimized Paragraph */}
        <p className="mb-6 text-lg text-gray-800 leading-relaxed relative z-10">
          <span className="font-bold text-orange-700">CV. Henqo Bunga Abadi</span> (dikenal juga sebagai <b>CV Henqo</b> atau <b>Henqo Bunga Abadi</b>) adalah perusahaan yang bergerak di bidang 
          <span className="bg-orange-50 px-1 rounded font-semibold">konsultan teknik &amp; lingkungan</span>, 
          <b> general contractor</b>, 
          <b> produsen pupuk hayati dan mikroba</b>, serta 
          <b> perdagangan umum</b>.<br /><br />
          Kami berkomitmen menghadirkan solusi <span className="text-orange-600 font-semibold underline decoration-wavy decoration-orange-400">inovatif</span> dan 
          <span className="text-orange-600 font-semibold underline decoration-wavy decoration-orange-400">berkelanjutan</span> untuk sektor industri, pertanian, dan lingkungan di Indonesia, khususnya di Lampung.<br /><br />
          Nama kami sering ditemukan di Google melalui pencarian seperti: <b>cv henqo</b>, <b>henqo bunga abadi</b>, <b>konsultan teknik henqo</b>, <b>general contractor lampung</b>, dan <b>pupuk mikroba lampung</b>.
        </p>

        {/* VISI & MISI */}
        <div className="grid md:grid-cols-2 gap-7">
          <div className="group bg-gradient-to-br from-orange-50 via-orange-100 to-white rounded-2xl p-6 shadow hover:shadow-lg flex flex-col gap-2 transition-all border border-orange-100 hover:scale-[1.03] duration-200">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={26} className="text-orange-500 group-hover:scale-110 transition" />
              <span className="font-bold text-orange-700 text-lg">Visi</span>
            </div>
            <p className="text-gray-700 text-base">
              Menjadi <b>mitra terpercaya</b> dalam layanan teknik, industri, dan lingkungan yang <b>berkelanjutan</b> dan <b>inovatif</b>.
            </p>
          </div>
          <div className="group bg-gradient-to-br from-orange-50 via-orange-100 to-white rounded-2xl p-6 shadow hover:shadow-lg flex flex-col gap-2 transition-all border border-orange-100 hover:scale-[1.03] duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Leaf size={26} className="text-orange-500 group-hover:scale-110 transition" />
              <span className="font-bold text-orange-700 text-lg">Misi</span>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-1 text-base">
              <li>Menyediakan layanan terbaik di bidang konsultasi teknik &amp; lingkungan</li>
              <li>Mengembangkan produk <b>pupuk hayati & mikroba</b> berkualitas tinggi</li>
              <li>Menyediakan konstruksi &amp; solusi industri yang <b>efisien dan tepat guna</b></li>
              <li>Mendorong inovasi berbasis <b>teknologi hijau & mikroorganisme</b></li>
            </ul>
          </div>
        </div>

        {/* Brand highlight */}
        <div className="mt-8 flex justify-end">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-orange-600/90 text-white rounded-xl text-sm shadow font-semibold tracking-wide">
            <Sparkles size={18} className="text-white" />
            Komitmen Profesional &amp; Inovatif
          </span>
        </div>
      </div>
    </section>
  )
}
