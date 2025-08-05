'use client'

import { Mail, MapPin, Phone, UserRound, Globe } from "lucide-react"

export default function CompanyProfile() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-3xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-orange-700 text-center mb-8 tracking-tight">
      </h1>
    <h1 className="text-4xl font-extrabold text-orange-700 text-center mb-8 tracking-tight">
        Profil Perusahaan
      </h1>

      <div className="space-y-6 text-gray-800 text-lg">
        <div className="flex items-start gap-4">
          <UserRound className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Nama Perusahaan</p>
            <p>CV. Henqo Bunga Abadi</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <UserRound className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Penanggung Jawab</p>
            <p>Ir. Hendra Achmad</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Alamat</p>
            <p>Jln. Raden Fattah No 21, Kel. Kaliawi, Kec. Tanjung Karang Pusat, Kota Bandar Lampung, 35115</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Layanan WA</p>
            <p>0821-7511-1972 / 0821-7511-1977</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Email</p>
            <p>
              <a href="mailto:cv.henqobungaabadi@gmail.com" className="text-orange-700 hover:underline">
                cv.henqobungaabadi@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Globe className="text-orange-500" size={28} />
          <div>
            <p className="font-semibold">Website</p>
            <p>
              <a href="https://cv-henqo-bunga-abadi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">
                https://cv-henqo-bunga-abadi.vercel.app/
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-orange-200">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Kegiatan Perusahaan</h2>
          <p className="text-gray-700 leading-relaxed">
            CV. Henqo Bunga Abadi bergerak dalam bidang Konsultan Teknik Manajemen, Industri, dan Lingkungan.
            Kami berkomitmen untuk memberikan solusi teknis terbaik demi efisiensi, keberlanjutan, dan kepatuhan lingkungan dalam setiap aspek kegiatan industri.
          </p>
        </div>
      </div>
    </section>
  )
}
