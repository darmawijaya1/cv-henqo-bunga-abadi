import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "CV. Henqo Bunga Abadi | Konsultan Teknik, General Contractor & Pupuk Mikroba",
  description: "Company profile resmi CV. Henqo Bunga Abadi (CV Henqo) - Konsultan Teknik, General Contractor, Industri Pupuk Alam & Mikroba, Legalitas, serta Perdagangan Umum di Lampung.",
  keywords: [
    "cv henqo bunga abadi",
    "cv henqo",
    "henqo bunga abadi",
    "konsultan teknik lampung",
    "konsultan lingkungan lampung",
    "pupuk mikroba lampung",
    "general contractor lampung",
    "jasa amdal lampung",
    "industri pupuk alami",
    "perdagangan umum lampung"
  ],
  icons: {
    icon: "/images/logo.png",      // favicon (harus di /public/images/logo.png)
    shortcut: "/images/logo.png",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* SEO meta tags extra for safety (opsional, untuk crawler yang belum support next metadata) */}
        <meta name="keywords" content="cv henqo bunga abadi, cv henqo, henqo bunga abadi, konsultan teknik lampung, konsultan lingkungan lampung, pupuk mikroba lampung, general contractor lampung, jasa amdal lampung, industri pupuk alami, perdagangan umum lampung"/>
        <meta name="robots" content="index, follow"/>
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen bg-orange-50 pt-20 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
