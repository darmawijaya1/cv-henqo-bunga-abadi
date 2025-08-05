'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/About', label: 'Tentang' },
  { href: '/Profil', label: 'Profil' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/Services', label: 'Layanan' },
  { href: '/Produk', label: 'Produk' },
  { href: '/LegalitasPage', label: 'Legalitas' },
  { href: '/Dokumentasi', label: 'Dokumentasi' },
  { href: '/ContactForm', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-2xl shadow border border-orange-300"
          />
          <span className="text-lg sm:text-xl font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
            CV. Henqo Bunga Abadi
          </span>
        </Link>

        {/* Hamburger menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition hover:bg-orange-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-7 flex flex-col justify-center items-center">
            <span className={`block absolute h-0.5 w-6 bg-orange-600 transform transition ${open ? 'rotate-45 top-3.5' : 'top-2'}`} />
            <span className={`block absolute h-0.5 w-6 bg-orange-600 transition ${open ? 'opacity-0' : 'top-3.5'}`} />
            <span className={`block absolute h-0.5 w-6 bg-orange-600 transform transition ${open ? '-rotate-45 top-3.5' : 'top-5'}`} />
          </div>
        </button>

        <ul className={`
          flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-2 md:space-y-0
          fixed md:static top-[70px] left-0 right-0 bg-white md:bg-transparent border-t md:border-none py-5 md:py-0 px-6 md:px-0 transition-all
          ${open ? 'block' : 'hidden'} md:flex
        `}>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded-xl transition font-medium
                  ${pathname === link.href
                    ? 'bg-orange-100 text-orange-700 shadow'
                    : 'hover:bg-orange-50 hover:text-orange-600 text-gray-800'}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
