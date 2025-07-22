import { Briefcase, Leaf, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-elegant p-8 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <Leaf size={140} className="text-orange-300" />
        </div>
        <h2 className="text-4xl font-extrabold mb-4 text-orange-600 tracking-tight flex items-center gap-2">
          <Briefcase size={36} className="text-orange-500" />
          Tentang Kami
        </h2>
        <p className="mb-6 text-lg text-gray-800 leading-relaxed">
          <span className="font-bold text-orange-700">CV. Henqo Bunga Abadi</span> adalah perusahaan Konsultan Teknik Manajemen Industri &amp; Lingkungan, General Contractor, Industri Pupuk Alam/Hara Mikro, Mikro Bio Bakteri, dan Perdagangan Umum.
          <br />
          Kami berkomitmen memberikan solusi <span className="text-orange-600 font-semibold">inovatif</span> dan <span className="text-orange-600 font-semibold">berkelanjutan</span> untuk sektor industri, pertanian, dan lingkungan.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-xl p-5 shadow flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={24} className="text-orange-500" />
              <span className="font-semibold text-orange-700 text-lg">Visi</span>
            </div>
            <p className="text-gray-700">
              Menjadi <b>mitra terpercaya</b> dalam solusi teknik, industri, dan lingkungan yang berkelanjutan &amp; inovatif.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-5 shadow flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <Leaf size={24} className="text-orange-500" />
              <span className="font-semibold text-orange-700 text-lg">Misi</span>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Memberikan layanan terbaik di bidang konsultasi teknik dan lingkungan</li>
              <li>Mengembangkan produk <b>pupuk alami</b> berkualitas tinggi</li>
              <li>Menyediakan konstruksi dan solusi manajemen industri yang efisien</li>
              <li>Inovasi produk berbasis <b>mikroorganisme</b> &amp; teknologi hijau</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
