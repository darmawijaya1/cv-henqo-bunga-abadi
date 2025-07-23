'use client'

const portoRawData = [
  "IPAL PT. ALLADINTEX (Tekstil), Karanganyar, 1990",
  "IPAL PT. ADISATEX (Tekstil), Karanganyar, 1990",
  "IPAL PT. SEKAR BENGAWAN (Tekstil), Karanganyar, 1990",
  "IPAL PT. SUBURTEX I (Tekstil), Karanganyar, 1990",
  "IPAL PT. ISKANDARTEX (Tekstil), Sukoharjo, 1990",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 1990",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 1990",
  "IPAL PT. SAMITEX SEWON (I) (Tekstil), Yogyakarta, 1990",
  "IPAL PT. SURYA SIDOAGUNG MULYA (Tekstil), Magelang, 1990",
  "IPAL PT. SRI REJEKI ISMAN (Tekstil), Sukoharjo, 1990",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1990",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 1990",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 1990",
  "IPAL PT. SARI WARNA ASLI (Tekstil), Sukoharjo, 1990",
  "IPAL PT. SAMITEX SEWON (II) (Tekstil), Yogyakarta, 1990",
  "IPAL PT. ISKANDARTEX (Tekstil), Sukoharjo, 1991",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1991",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 1991",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 1991",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 1991",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 1991",
  "IPAL PT. SUBURTEX II (Tekstil), Karanganyar, 1991",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1991",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1992",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1992",
  "IPAL PT. SURYA SIDOAGUNG MULYA (Tekstil), Magelang, 1992",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1993",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 1993",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 1993",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 1993",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 1993",
  "IPAL PT. SAMITEX SEWON (II) (Tekstil), Yogyakarta, 1993",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 1993",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1993",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 1994",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1994",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1994",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1995",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1996",
  "IPAL PT. ISKANDARTEX (Tekstil), Sukoharjo, 1996",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 1996",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1997",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1997",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 1997",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1998",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 1998",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 1998",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 1998",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1999",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 1999",
  "IPAL PT. SEMARANG BENTENG (Tekstil), Semarang, 1999",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 2000",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2000",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2000",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2000",
  "IPAL PT. ISKANDARTEX (Tekstil), Sukoharjo, 2001",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2001",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2001",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2001",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2001",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2001",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2002",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2002",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2002",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2002",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2002",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2002",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2003",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2003",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2003",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2003",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2003",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2004",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2004",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2004",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2004",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2004",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2004",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2005",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2005",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2005",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2005",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2005",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2005",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2006",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2006",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2006",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2006",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2006",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2006",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2007",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2007",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2007",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2007",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2007",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2007",
  "IPAL PT. SIGMA MITRA MANDIRI (Tekstil), Boyolali, 2008",
  "IPAL PT. BATIK KENCANA (Tekstil), Sukoharjo, 2008",
  "IPAL PT. DUNIATEX (Tekstil), Karanganyar, 2008",
  "IPAL PT. DAN LIRIS (Tekstil), Sukoharjo, 2008",
  "IPAL PT. BATIK SEMAR (Tekstil), Surakarta, 2008",
  "IPAL PT. BATIK SANTOSA (Tekstil), Sukoharjo, 2008"
];

function parsePortoRow(str) {
  if (!str) return null;
  // Hilangkan angka urut jika ada
  let s = str.replace(/^\d+\s*,\s*/, '');
  const [title, lokasi, tahun] = s.split(',');
  return {
    title: title ? title.trim() : '',
    client: lokasi ? lokasi.trim() : '',
    year: tahun ? tahun.trim() : '',
  }
}

export default function Portofolio() {
  const projects = portoRawData.map(parsePortoRow).filter(Boolean);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600 text-center">Portofolio Proyek</h2>
      <div className="flex flex-col gap-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center gap-2 border-l-4 border-orange-400"
          >
            <div className="flex-1">
              <div className="font-semibold text-base text-orange-700">{proj.title}</div>
              <div className="text-sm text-gray-500">{proj.client}</div>
            </div>
            <div className="font-bold text-orange-600 md:w-20 text-right">{proj.year}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-xs text-gray-400 text-center">
        Total Proyek: {projects.length}
      </div>
    </section>
  );
}
