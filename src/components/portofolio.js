'use client'

export default function Portofolio() {
  // Contoh data portofolio, bisa diganti sesuai project asli
  const projects = [
    {
      title: "Pembangunan Instalasi Pengolahan Limbah Cair (IPAL)",
      client: "PT. Industri Kimia",
      year: 2024,
      image: "/images/portofolio/ipal.jpg",
      desc: "Konstruksi dan instalasi sistem pengolahan limbah cair industri untuk meningkatkan efisiensi lingkungan dan kepatuhan regulasi."
    },
    {
      title: "Pengembangan Produk Pupuk Mikroba",
      client: "Kelompok Tani Makmur",
      year: 2023,
      image: "/images/portofolio/pupuk.jpg",
      desc: "Riset, uji laboratorium, dan produksi pupuk mikroba ramah lingkungan yang mendukung pertumbuhan tanaman secara optimal."
    },
    {
      title: "Konsultasi AMDAL Pabrik Makanan",
      client: "CV. Boga Sejahtera",
      year: 2023,
      image: "/images/portofolio/amdal.jpg",
      desc: "Penyusunan dokumen AMDAL dan pendampingan pengurusan izin lingkungan pabrik makanan."
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">Portofolio Proyek</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-elegant hover:shadow-2xl transition p-4 group">
            <div className="h-40 w-full overflow-hidden rounded-xl mb-4">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover h-full w-full group-hover:scale-105 transition"
                onError={e => e.target.style.display='none'}
              />
            </div>
            <div className="font-semibold text-lg mb-1 text-orange-700">{proj.title}</div>
            <div className="text-xs text-gray-400 mb-2">{proj.client} &bull; {proj.year}</div>
            <p className="text-sm text-gray-700">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
