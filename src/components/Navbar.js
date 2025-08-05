'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/About', label: 'Tentang' },
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

  // Disable scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/70 shadow-xl border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
          <Link
            href="/"
            className="flex items-center font-extrabold text-xl text-orange-600 tracking-wide gap-2 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-11 h-11 rounded-2xl shadow-elegant border border-orange-100"
            />
            <span className="hidden sm:block drop-shadow">CV. Henqo Bunga Abadi</span>
          </Link>

          {/* Hamburger menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative w-7 h-7 flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-6 bg-orange-600 transform transition duration-300 ease-in-out ${
                  open ? 'rotate-45 top-3.5' : 'top-2'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-orange-600 transition-all duration-300 ease-in-out ${
                  open ? 'opacity-0' : 'top-3.5'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-orange-600 transform transition duration-300 ease-in-out ${
                  open ? '-rotate-45 top-3.5' : 'top-5'
                }`}
              />
            </div>
          </button>

          {/* Menu */}
          <ul
            className={`
              flex flex-col md:flex-row md:space-x-2 lg:space-x-6 space-y-2 md:space-y-0 
              fixed md:static top-16 left-0 right-0 bg-white/90 md:bg-transparent border-b md:border-none shadow md:shadow-none
              py-5 md:py-0 px-5 md:px-0 transition-all duration-300
              ${open ? 'block' : 'hidden'} md:flex
            `}
          >
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-xl font-semibold transition-colors duration-200
                    ${
                      pathname === link.href
                        ? 'bg-orange-100 text-orange-700 shadow'
                        : 'hover:bg-orange-50 hover:text-orange-600 text-gray-700'
                    }
                  `}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay gelap saat menu mobile aktif */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Padding agar konten tidak tertutup navbar fixed */}
      <style jsx global>{`
        body {
          padding-top: 64px;
        }
      `}</style>
    </>
  )
}
