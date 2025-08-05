import { Briefcase, Leaf, TrendingUp, Sparkles, User } from "lucide-react"

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-orange-100 backdrop-blur-sm">
        {/* Decorative Icons & Gradients */}
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

        {/* Company Description */}
        <p className="mb-6 text-lg text-gray-800 leading-relaxed text-justify relative z-10">
          Menyadari akan pentingnya upaya pelestarian lingkungan sebagai bagian dari pembangunan berwawasan lingkungan, <b>CV. TIRTA SUEZ LAMPUNG</b> yang sejak berdirinya mengkhususnya diri di bidang Konsultan Teknik, Manajemen, Industri dan Lingkungan merasa terpanggil untuk semakin berperan serta dan berpartisipasi secara aktif dalam berbagai penanganan masalah lingkungan hidup.
          <br /><br />
          Bertekat dengan kepercayaan diri yang tinggi dan didukung Tenaga Ahli Teknik dari berbagai disiplin yang mumpuni, mendorong kami untuk menawarkan jasa konsultasi di bidang lingkungan dan perencanaan teknik keterlaksanaan pembangunan di segala bidang seperti:
        </p>

        <div className="text-gray-800 leading-relaxed text-justify space-y-5 text-base">
          <div>
            <b>A. STUDI AMDAL (ANALISIS MENGENAI DAMPAK LINGKUNGAN)</b><br />
            KA : Kerangka Acuan<br />
            AMDAL : Analisis Dampak Lingkungan<br />
            RKL : Rencana Pengelolaan Lingkungan<br />
            RPL : Rencana Pemantauan Lingkungan<br />
            Executive Summary
          </div>
          <div>
            <b>B. KEGIATAN YANG TIDAK WAJIB AMDAL</b><br />
            UKL : Upaya Kelola Lingkungan<br />
            UPL : Upaya Pemantauan Lingkungan
          </div>
          <div>
            <b>C. STUDI KELAYAKAN</b><br />
            TPA : Tempat Pembuangan Akhir (Landfill)<br />
            Zona / Kawasan Industri
          </div>
          <div>
            <b>D. PERENCANAAN IPL (Instalasi Pengolah Limbah)</b><br />
            IPL Cair: untuk industri kecil, kulit, tapioka/aci, kertas, rokok/cengkeh, alkohol, pelapisan logam, farmasi dan sebagainya, IPL cair Rumah Sakit dan limbah cair domestik maupun limbah industri lainnya.<br />
            IPL Gas: untuk industri pelapisan logam, pabrik gula, pengecoran logam dan sebagainya.
          </div>
          <div>
            <b>E. MANAJEMEN LINGKUNGAN</b><br />
            Lingkungan Fisik-Kimia<br />
            Lingkungan Biotis<br />
            Lingkungan Sosial Ekonomi<br />
            Termasuk pengoperasian serta perawatan purna jual IPL.
          </div>
          <div>
            <b>F. PERENCANAAN TEKNIK PENGAWASAN</b><br />
            Bangunan Gedung dan Pabrik<br />
            Perumahan / Pemukiman
          </div>
          <p>
            Sadar akan pentingnya peranan Konsultan Teknik, Manajemen, Industri dan Lingkungan dalam rangka pelaksanaan Program Pembangunan Nasional, dengan dilandasi oleh semangat profesionalisme dan pengabdian terhadap kepentingan Nusa dan Bangsa, Direksi dan segenap karyawan <b>CV. TIRTA SUEZ LAMPUNG</b> dengan penuh minat, gairah dan kemantapan serta didasari rasa tanggung jawab yang setinggi-tingginya akan melaksanakan segala tugas dan kepercayaan yang diberikan pada pemrakarsa kegiatan dengan sebaik-baiknya.
          </p>
        </div>

        {/* Struktur Organisasi */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">Struktur Organisasi</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-white p-4 rounded-xl shadow border border-orange-100 text-center">
              <User className="mx-auto mb-2 text-orange-500" size={32} />
              <p className="text-sm font-semibold text-orange-600">Direktur</p>
              <p className="text-lg font-bold text-gray-800">Ir. Hendra Achmad</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-white p-4 rounded-xl shadow border border-orange-100 text-center">
              <User className="mx-auto mb-2 text-orange-500" size={32} />
              <p className="text-sm font-semibold text-orange-600">Wakil Direktur</p>
              <p className="text-lg font-bold text-gray-800">M. Vhize Jenna Afif El. Imami, SH</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-white p-4 rounded-xl shadow border border-orange-100 text-center">
              <User className="mx-auto mb-2 text-orange-500" size={32} />
              <p className="text-sm font-semibold text-orange-600">Bendahara</p>
              <p className="text-lg font-bold text-gray-800">Qonita Nurhayati, SH</p>
            </div>
          </div>
        </div>

        {/* Footer Highlight */}
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
