export default function Dokumentasi() {
  // Ganti foto1.jpg, dst dengan nama file dokumentasi kamu
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">Dokumentasi Kegiatan</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <img src="/images/dokumentasi/foto1.jpg" className="rounded-lg shadow" alt="Kegiatan 1"/>
        <img src="/images/dokumentasi/foto2.jpg" className="rounded-lg shadow" alt="Kegiatan 2"/>
        <img src="/images/dokumentasi/foto3.jpg" className="rounded-lg shadow" alt="Kegiatan 3"/>
        <img src="/images/dokumentasi/foto4.jpg" className="rounded-lg shadow" alt="Kegiatan 4"/>
      </div>
    </section>
  )
}
