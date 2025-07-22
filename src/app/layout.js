import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "CV. Henqo Bunga Abadi",
  description: "Company profile resmi CV. Henqo Bunga Abadi - Konsultan Teknik, General Contractor, Industri Pupuk & Perdagangan",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="min-h-screen bg-orange-50 pt-20 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
