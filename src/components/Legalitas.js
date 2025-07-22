export default function Legalitas() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">Legalitas & Legal Form</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-elegant p-4 text-center">
          <img src="/images/legalitas/npwp.jpg" alt="NPWP" className="rounded-lg shadow mb-2"/>
          <p className="font-semibold">NPWP</p>
        </div>
        <div className="bg-white rounded-2xl shadow-elegant p-4 text-center">
          <img src="/images/legalitas/akta.jpg" alt="Akta Pendirian" className="rounded-lg shadow mb-2"/>
          <p className="font-semibold">Akta Pendirian CV</p>
        </div>
        <div className="bg-white rounded-2xl shadow-elegant p-4 text-center">
          <img src="/images/legalitas/sk-menkumham.jpg" alt="SK MENKUMHAM" className="rounded-lg shadow mb-2"/>
          <p className="font-semibold">SK MENKUMHAM</p>
        </div>
      </div>
    </section>
  )
}
