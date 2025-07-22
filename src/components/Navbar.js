'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center font-bold text-xl text-orange-600">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 mr-2 rounded-full"/>
          CV. Henqo Bunga Abadi
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <span className="text-2xl">&#9776;</span>
        </button>
        <ul className={`flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mt-4 md:mt-0 absolute md:static bg-white left-0 right-0 top-16 md:top-0 ${open ? "block" : "hidden"} md:block`}>
          <li><Link href="/tentang" className="hover:text-orange-600 font-medium">Tentang</Link></li>
          <li><Link href="/layanan" className="hover:text-orange-600 font-medium">Layanan</Link></li>
          <li><Link href="/legalitas" className="hover:text-orange-600 font-medium">Legalitas</Link></li>
          <li><Link href="/dokumentasi" className="hover:text-orange-600 font-medium">Dokumentasi</Link></li>
          <li><Link href="/kontak" className="hover:text-orange-600 font-medium">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  )
}
