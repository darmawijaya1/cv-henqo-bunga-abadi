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

  // Disable scroll saat menu mobile aktif
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 object-cover rounded-xl shadow-md border-2 border-orange-400"
            />
            <span className="text-xl font-extrabold text-orange-600 tracking-wide whitespace-nowrap">
              CV. Henqo Bunga Abadi
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-3 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <div className="relative w-7 h-7 flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-transform duration-300 ${
                  open ? 'rotate-45 top-3.5' : 'top-2'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'top-3.5'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-7 bg-orange-600 rounded transition-transform duration-300 ${
                  open ? '-rotate-45 top-3.5' : 'top-5'
                }`}
              />
            </div>
          </button>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    pathname === href
                      ? 'bg-orange-200 text-orange-800 shadow'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  } transition-colors duration-200`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        {open && (
          <ul className="md:hidden bg-white shadow-md border-t border-orange-200 py-4 flex flex-col space-y-3 px-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium ${
                    pathname === href
                      ? 'bg-orange-200 text-orange-800 shadow'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  } transition-colors duration-200`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Overlay saat menu mobile aktif */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Padding supaya konten tidak tertutup navbar */}
      <style jsx global>{`
        body {
          padding-top: 64px; /* Tinggi navbar */
        }
      `}</style>
    </>
  )
}
