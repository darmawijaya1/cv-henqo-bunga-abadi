import {
  Briefcase,
  Leaf,
  TrendingUp,
  Sparkles,
  User,
} from "lucide-react";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 md:px-8">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-orange-100 backdrop-blur-sm">
        {/* Background & Decorative Icons */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-200 via-orange-50 to-white rounded-full blur-2xl opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <Leaf size={150} className="text-orange-300" />
        </div>
        <div className="absolute left-6 top-6 opacity-30 animate-pulse">
          <Sparkles size={36} className="text-orange-300" />
        </div>

        {/* Heading */}
        <header className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight flex items-center gap-4">
            <Briefcase size={42} className="text-orange-500 drop-shadow" />
            Tentang Kami
          </h2>
        </header>

        {/* Company Description */}
        <article className="space-y-6 text-justify text-base leading-relaxed text-gray-800 relative z-10">
          <p>
            Menyadari akan pentingnya upaya pelestarian lingkungan sebagai bagian dari pembangunan berwawasan lingkungan, <strong>CV. Henqo Bunga Abadi</strong> yang sejak berdirinya mengkhususkan diri di bidang Konsultan Teknik, Manajemen, Industri dan Lingkungan merasa terpanggil untuk semakin berperan serta secara aktif dalam penanganan masalah lingkungan hidup.
          </p>
          <p>
            Bertekad dengan kepercayaan diri yang tinggi dan didukung oleh Tenaga Ahli Teknik dari berbagai disiplin yang mumpuni, kami menawarkan jasa konsultasi di bidang lingkungan dan perencanaan teknik untuk keterlaksanaan pembangunan di berbagai sektor seperti:
          </p>

          <ul className="space-y-4 pl-4">
            <li>
              <strong>A. STUDI AMDAL (Analisis Mengenai Dampak Lingkungan)</strong><br />
              KA        : Kerangka Acuan<br />
              AMDAL     : Analisis Dampak Lingkungan<br />
              RKL       : Rencana Pengelolaan Lingkungan<br />
              RPL       : Rencana Pemantauan Lingkungan<br />
              Executive Summary
            </li>
            <li>
              <strong>B. KEGIATAN YANG TIDAK WAJIB AMDAL</strong><br />
              UKL       : Upaya Kelola Lingkungan<br />
              UPL       : Upaya Pemantauan Lingkungan
            </li>
            <li>
              <strong>C. STUDI KELAYAKAN</strong><br />
              TPA       : Tempat Pembuangan Akhir (Landfill)<br />
              Zona / Kawasan Industri
            </li>
            <li>
              <strong>D. PERENCANAAN IPL (Instalasi Pengolah Limbah)</strong><br />
              IPL Cair  : industri kecil, kulit, tapioka/aci, kertas, rokok/cengkeh, alkohol, pelapisan logam, farmasi, IPL cair rumah sakit & limbah cair domestik atau industri.<br />
              IPL Gas   : industri pelapisan logam, pabrik gula, pengecoran logam, dll.
            </li>
            <li>
              <strong>E. MANAJEMEN LINGKUNGAN</strong><br />
              Lingkungan Fisik-Kimia<br />
              Lingkungan Biotis<br />
              Lingkungan Sosial Ekonomi<br />
              Termasuk pengoperasian & perawatan purna jual IPL.
            </li>
            <li>
              <strong>F. PERENCANAAN TEKNIK PENGAWASAN</strong><br />
              Bangunan Gedung dan Pabrik<br />
              Perumahan / Pemukiman
            </li>
          </ul>

          <p>
            Sadar akan pentingnya peranan Konsultan Teknik, Manajemen, Industri dan Lingkungan dalam pelaksanaan Program Pembangunan Nasional, kami – Direksi dan seluruh karyawan <strong>CV. Henqo Bunga Abadi</strong> – dengan semangat profesionalisme dan rasa tanggung jawab yang tinggi, siap melaksanakan segala tugas dan kepercayaan yang diberikan dengan sebaik-baiknya.
          </p>
        </article>

        {/* Struktur Organisasi */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-orange-700 mb-6">Struktur Cv</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Direktur",
                name: "Ir. Hendra Achmad",
              },
              {
                title: "Wakil Direktur",
                name: "M. Vhize Jenna Afif El. Imami, SH",
              },
              {
                title: "Bendahara",
                name: "Qonita Nurhayati, SH",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 via-orange-100 to-white p-5 rounded-xl shadow border border-orange-100 text-center transition hover:scale-[1.02]"
              >
                <User className="mx-auto mb-2 text-orange-500" size={36} />
                <p className="text-sm font-semibold text-orange-600">{member.title}</p>
                <p className="text-lg font-bold text-gray-800">{member.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-10 flex justify-end">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600/90 text-white rounded-xl text-sm shadow font-semibold tracking-wide animate-pulse">
            <Sparkles size={18} className="text-white" />
            Komitmen Profesional & Inovatif
          </span>
        </div>
      </div>
    </section>
  );
}
