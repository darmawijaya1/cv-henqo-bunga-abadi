'use client'
import {
  Briefcase,
  Leaf,
  TrendingUp,
  Sparkles,
  User,
} from "lucide-react"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 md:px-10">
      <div className="bg-white/95 rounded-3xl shadow-xl p-10 md:p-14 relative overflow-hidden border border-orange-100 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">

        {/* Decorative Background */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-200 via-orange-50 to-white rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <Leaf size={160} className="text-orange-300" />
        </div>
        <div className="absolute left-6 top-6 opacity-30 animate-pulse">
          <Sparkles size={38} className="text-orange-300" />
        </div>

        {/* Heading */}
        <header className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight flex items-center gap-4">
            <Briefcase size={42} className="text-orange-500 drop-shadow-sm" />
            Tentang Kami
          </h2>
        </header>

        {/* Body Text */}
        <article className="space-y-6 text-justify text-base leading-relaxed text-gray-800 relative z-10">
          <p>
            Menyadari akan pentingnya upaya pelestarian lingkungan sebagai bagian dari pembangunan berwawasan lingkungan, <strong>CV. Henqo Bunga Abadi</strong> yang sejak berdirinya mengkhususkan diri di bidang Konsultan Teknik, Manajemen, Industri dan Lingkungan merasa terpanggil untuk semakin berperan serta secara aktif dalam penanganan masalah lingkungan hidup.
          </p>
          <p>
            Bertekad dengan kepercayaan diri yang tinggi dan didukung oleh Tenaga Ahli Teknik dari berbagai disiplin yang mumpuni, kami menawarkan jasa konsultasi di bidang lingkungan dan perencanaan teknik untuk keterlaksanaan pembangunan di berbagai sektor seperti:
          </p>

          <ul className="space-y-4 pl-4 list-disc marker:text-orange-500">
            <li>
              <strong>A. STUDI AMDAL (Analisis Mengenai Dampak Lingkungan)</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">KA :</span> Kerangka Acuan<br />
                <span className="font-semibold">AMDAL :</span> Analisis Dampak Lingkungan<br />
                <span className="font-semibold">RKL :</span> Rencana Pengelolaan Lingkungan<br />
                <span className="font-semibold">RPL :</span> Rencana Pemantauan Lingkungan<br />
                <span className="font-semibold">Executive Summary :</span> Executive Summary
              </div>
            </li>
            <li>
              <strong>B. KEGIATAN YANG TIDAK WAJIB AMDAL</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">UKL :</span> Upaya Kelola Lingkungan<br />
                <span className="font-semibold">UPL :</span> Upaya Pemantauan Lingkungan
              </div>
            </li>
            <li>
              <strong>C. STUDI KELAYAKAN</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">TPA :</span> Tempat Pembuangan Akhir (Landfill)<br />
                <span className="font-semibold">Zona / Kawasan Industri :</span> Zona / Kawasan Industri
              </div>
            </li>
            <li>
              <strong>D. PERENCANAAN IPL (Instalasi Pengolah Limbah)</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">IPL Cair :</span> Industri kecil, kulit, tapioka/aci, kertas, rokok/cengkeh, alkohol, pelapisan logam, farmasi, rumah sakit, dan limbah cair domestik.<br />
                <span className="font-semibold">IPL Gas :</span> Industri pelapisan logam, pabrik gula, pengecoran logam, dan sebagainya.
              </div>
            </li>
            <li>
              <strong>E. MANAJEMEN LINGKUNGAN</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">Lingkungan Fisik-Kimia :</span> Lingkungan Fisik-Kimia<br />
                <span className="font-semibold">Lingkungan Biotis :</span> Lingkungan Biotis<br />
                <span className="font-semibold">Lingkungan Sosial Ekonomi :</span> Lingkungan Sosial Ekonomi<br />
                <span className="font-semibold">Termasuk pengoperasian :</span> Termasuk pengoperasian serta perawatan purna jual IPL.
              </div>
            </li>
            <li>
              <strong>F. PERENCANAAN TEKNIK PENGAWASAN</strong><br />
              <div className="grid grid-cols-[100px_1fr] gap-2 pl-4">
                <span className="font-semibold">Bangunan Gedung dan Pabrik :</span> Bangunan Gedung dan Pabrik<br />
                <span className="font-semibold">Perumahan / Pemukiman :</span> Perumahan / Pemukiman
              </div>
            </li>
          </ul>

          <p>
            Sadar akan pentingnya peranan Konsultan Teknik, Manajemen, Industri dan Lingkungan dalam pelaksanaan Program Pembangunan Nasional, kami – Direksi dan seluruh karyawan <strong>CV. Henqo Bunga Abadi</strong> – dengan semangat profesionalisme dan rasa tanggung jawab yang tinggi, siap melaksanakan segala tugas dan kepercayaan yang diberikan dengan sebaik-baiknya.
          </p>
        </article>

        {/* Struktur Organisasi */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-orange-700 mb-6">Struktur CV</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Direktur", name: "Ir. Hendra Achmad" },
              { title: "Wakil Direktur", name: "M. Vhize Jenna Afif El. Imami, SH" },
              { title: "Bendahara", name: "Qonita Nurhayati, SH" },
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 via-orange-100 to-white p-6 rounded-xl shadow-md border border-orange-100 text-center transition-all hover:scale-[1.02]"
              >
                <User className="mx-auto mb-2 text-orange-500" size={36} />
                <p className="text-sm font-semibold text-orange-600">{person.title}</p>
                <p className="text-lg font-bold text-gray-800">{person.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 flex justify-end">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded-xl text-sm shadow font-semibold tracking-wide animate-pulse">
            <Sparkles size={18} className="text-white" />
            Komitmen Profesional & Inovatif
          </span>
        </div>
      </div>
    </section>
  )
}