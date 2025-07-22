export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <img src="/images/logo.png" alt="Logo" className="w-32 h-32 mb-6 rounded-2xl shadow-elegant"/>
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">CV. Henqo Bunga Abadi</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-800">Konsultan Teknik Manajemen Industri & Lingkungan, General Contractor, Industri Pupuk Alam/Hara Mikro, Mikro Bio Bakteri, dan Perdagangan Umum</p>
      <a href="/kontak" className="btn text-lg mt-2">Hubungi Kami</a>
    </section>
  )
}
