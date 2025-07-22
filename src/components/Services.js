export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">Layanan Kami</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-elegant p-6">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">Konsultan Teknik & Lingkungan</h3>
          <p>Konsultasi teknik manajemen industri, pengelolaan limbah, analisis dampak lingkungan, efisiensi produksi.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-elegant p-6">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">General Contractor</h3>
          <p>Pelaksanaan proyek konstruksi skala besar (industri, infrastruktur, bangunan umum).</p>
        </div>
        <div className="bg-white rounded-2xl shadow-elegant p-6">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">Industri Pupuk & Mikroba</h3>
          <p>Pembuatan pupuk berbasis bahan alami & mikroba untuk pertanian/perikanan.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-elegant p-6">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">Perdagangan Umum</h3>
          <p>Perdagangan produk unggulan untuk kebutuhan pasar domestik & internasional.</p>
        </div>
      </div>
    </section>
  )
}
