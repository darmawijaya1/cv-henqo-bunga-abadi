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
  "IPAL PT. SURYA SIDOAGUNG MULYA (Tekstil), Magelang, 1991",
  "IPAL PT. SRI REJEKI ISMAN (Tekstil), Sukoharjo, 1992",
  "IPAL PT. SANDANG ANGGUN MORATEX (Tekstil), Sukoharjo, 1993",
  "IPAL PT. WONOREJO KATON (Tekstil), Surakarta, 1993",
  "IPAL PT. AGUNGTEX (Tekstil), Karanganyar, 1993",
  "IPAL PT. NAGAMAS (Tekstil), Batang, 1993",
  "IPAL PT. FALTATEX (Tekstil), Pekalongan, 1993",
  "IPAL PT. PANJI DANANJAYA (Tekstil), Sragen, 1993",
  "IPAL PT. SINARMAS WIDIJAYA (Tekstil), Batang, 1994",
  "IPAL PT. SURYA DADARI (Tekstil), Karanganyar, 1996",
  "IPAL Bersama Industri Pencucian Jean (Tekstil) (Garmen), Pekalongan, 1997",
  "IPAL PT. MUTU GADING TEXTLE (Tekstil) (Sintetis), Surakarta, 1997",
  "IPAL PT. BATAM TEXTLE INDUSTRY (Tekstil), Ungaran, 1997",
  "IPAL PT. MUTU GADING TEKSTIL (Tekstil), Surakarta, 1998",
  "IPAL PT. DJARUM (Rokok), Kudus, 1992",
  "IPAL PT. INDONESIA STEEL TUBE WORK Ltd. (Pipa Galvania), Semarang, 1992",
  "IPAL PT. SUKOHARJO MAKMUR ABADI (Tapioka), Sukoharjo, 1993",
  "IPAL PTP. XIV (PERSERO), Cirebon, 1994",
  "IPAL PG. GEMPOL (Gula)",
  "IPAL PG. TERSANA BARU (Gula)",
  "IPAL PTP. XIV (PERSERO), Cirebon, 1994",
  "IPAL PG. GEMPOL (Gula)",
  "IPAL PG. KARANG SUWUNG (Gula)",
  "IPAL PTP. XIV (PERSERO), Cirebon, 1994",
  "IPAL PG. KADIPATEN (Gula)",
  "IPAL PG. JATIWANGI (Gula)",
  "IPAL PT. CAHAYA SURYA TUNAS TAPIOKA (Tapioka), Wonogiri, 1994",
  "IPAL PT. KUSUMA REMAJA (Minyak Goreng), Karanganyar, 1994",
  "IPAL PT. RUKUN MAKMUR (Pelapisan Logam), Karanganyar, 1994",
  "IPAL RS. GRAHA MEDIKA (Rumah Sakit), Jakarta, 1994",
  "IPAL RS. HARUM (Rumah Sakit), Jakarta, 1994",
  "IPAL RS. MEDIKA GRIYA (Rumah Sakit), Jakarta, 1994",
  "IPAL PT. BINAJAYA RODA-KARYA (Barito Group) (Kayu Lapis), Banjarmasin, 1995",
  "IPAL PT. BINTANG BUANA SAKTI (Kulit), Semarang, 1996",
  "IPAL PT. PUSPITA ABADI (Kulit), Semarang, 1996",
  "IPAL PT. PUSKUD MINA BARUNA (Ikan Beku), Semarang, 1996",
  "IPAL CV. SUMBER BARU (Kertas), Semarang, 1996",
  "IPAL PT. CONDRO PURNOMO CIPTO (Kulit), Semarang, 1996",
  "IPAL 5 (LIMA) INDUSTRI TAPIOKA DI PURBALINGGA (Tepung Aci), Purbalingga, 1998",
  "IPAL PT. SUMALINDO LESTARI JAYA (Kayu Lapis), Samarinda, 1999",
  "IPAL PT. MDF (Kayu Lapis), Samarinda, 1999",
  "IPAL PT. NOJORONO (Rokok), Kudus, 2000",
  "IPAL PAGUYUBAN JEAN WASH PEKALONGAN (IPAL BERSAMA), (Konfeksi dan Laundry Jean), Pekalongan, 2000",
  "IPAL PT. SHITATEX (INDUSTRY JEAN WASH (Konfeksi dan Laundry Jean), Pekalongan, 2001",
  "IPAL PT. AST INDONESIA (Elektronik) Audio, Semarang, 2002",
  "IPAL PT. SAMITEX SEWON (II) (Industri Tekstil), DIY, 2003",
  "IPAL PT. SIMOPLAS (I) (Industri Plastik), Semarang, 2003",
  "IPAL PT. SEGARA SUBUR MINA SEJAHTERA (Industri Tepung Ikan), Pekalongan, 2004",
  "IPAL PT. TOSSA SHAKTI (Mobil), Kaliwungu Kendal, 2005",
  "IPAL PT. SIMOPLAS (II) (Industri Plastik), Semarang, 2006",
  "IPAL PA. PUNGGUK SENTOSA (Industri Tepung Tapioka), Bandar Lampung, 2007",
  "IPAL IPAL BERSAMA PABRIK RAMBUT (Pabrik Rambut) (16 Pabrik), Purbalingga, 2008",
  "IPAL PD. WAHANA RAJAHARJA, Teluk Betung-Lampung, 2008",
  "Pembuatan Depot Air Isi Ulang, Bandar Lampung, 2009",
  "Pembuatan Depot Air Isi Ulang, Tulang Bawang-Unit 2, 2009",
  "Pembuatan Depot Air Isi Ulang, Way Jepara-Lampung Timur, 2009",
  "Pembuatan Depot Air Isi Ulang, Way Abung-Lampung, 2010",
  "Pembuatan Depot Air Isi Ulang, Raja Basa-Bandar Lampung, 2010",
  "Pembuatan Depot Air Isi Ulang, Jati Agung-Lampung Selatan, 2010",
  "Pembuatan Depot Air Isi Ulang, Pal 10-Palembang, 2011",
  "Pembuatan Depot Air Isi Ulang, Kerawang-Tanggamus-Lampung, 2011",
  "Pembuatan Depot Air Isi Ulang, Bandar Lampung, 2012",
  "Pembuatan Depot Air Isi Ulang, Natar-Lampung Selatan, 2012",
  "Pembuatan Depot Air Isi Ulang, Bandar Lampung, 2012",
  "Pembuatan Depot Air Isi Ulang, Kemiling-Bandar Lampung, 2012",
  "Pembuatan Depot Air Isi Ulang, Unit 6-Tulang Bawang, 2012",
  "Pembuatan Depot Air Isi Ulang, Gedong Haji Lama-Lampung Utara, 2012",
  "IPAL MC'D Kota Bandar Lampung, Bandar Lampung, 2018",
  "IPAL MC'D Kota Palembang, Palembang, 2018",
  "IPAL RS Mardi Waluyo Metro, Metro, 2022",
  "IPAL PT Keong Nusantara Abadi (Wongcoco Group), 2022",
  "IPLT Dinas Kebersihan Kota Bandar Lampung, Bandar Lampung, 2023"
];

function parsePortoRow(str) {
  if (!str) return null;
  let s = str.replace(/^\d+\s*,\s*/, '');
  // Split by 2 koma terakhir, agar "Gula" & kawan2 tetap aman
  const arr = s.split(',');
  const year = arr.length > 1 ? arr[arr.length - 1].trim() : '';
  const client = arr.length > 2 ? arr.slice(1, -1).join(',').trim() : (arr[1] || '').trim();
  const title = arr[0] ? arr[0].trim() : '';
  return { title, client, year };
}

export default function Portofolio() {
  const projects = portoRawData.map(parsePortoRow).filter(Boolean);

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-orange-600 text-center tracking-wide">
        Pengalaman Kerja
      </h2>
      <div className="flex flex-col gap-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-elegant hover:shadow-xl transition p-5 group flex items-start gap-3 border-l-4 border-orange-400"
          >
            <div className="text-lg md:text-xl font-black text-orange-500 mt-0.5 min-w-8 text-center">{i + 1}</div>
            <div className="flex-1">
              <div className="font-semibold text-base md:text-lg text-orange-700">{proj.title}</div>
              {proj.client && (
                <div className="text-sm text-gray-500">{proj.client}</div>
              )}
            </div>
            <div className="font-bold text-orange-600 text-right min-w-14">{proj.year}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg border-2 border-orange-200 tracking-wide">
          Total Proyek: {projects.length}
        </div>
      </div>
    </section>
  );
}
