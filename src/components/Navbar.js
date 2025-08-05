'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-14 h-14 object-cover rounded-3xl shadow-md border-2 border-orange-400"
            />
            <span className="text-xl sm:text-2xl font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
              CV. Henqo Bunga Abadi
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-3 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <div className="relative w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-transform duration-300 ${
                  open ? 'rotate-45 top-4' : 'top-2'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'top-4'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-transform duration-300 ${
                  open ? '-rotate-45 top-4' : 'top-6'
                }`}
              />
            </div>
          </button>

          {/* Navigation Menu */}
          <ul
            className={`
              fixed md:static top-[72px] left-0 right-0 bg-white md:bg-transparent border-t md:border-none
              py-6 md:py-0 px-8 md:px-0 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0
              shadow-md md:shadow-none rounded-b-lg md:rounded-none
              transition-all duration-300 ease-in-out overflow-hidden
              ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}
              md:opacity-100 md:max-h-full
            `}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
                    block px-5 py-2 rounded-xl font-medium
                    ${
                      pathname === href
                        ? 'bg-orange-200 text-orange-800 shadow-lg'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }
                    transition-colors duration-200
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay saat menu mobile terbuka */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Padding agar konten tidak tertutup navbar */}
      <style jsx global>{`
        body {
          padding-top: 72px;
        }
      `}</style>
    </>
  )
}
