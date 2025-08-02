import '../styles/globals.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CV. Henqo Bunga Abadi | Konsultan Teknik, General Contractor & Pupuk Mikroba</title>
        <meta name="description" content="Company profile resmi CV. Henqo Bunga Abadi (CV Henqo) - Konsultan Teknik, General Contractor, Industri Pupuk Alam & Mikroba, Legalitas, serta Perdagangan Umum di Lampung." />
        <meta name="keywords" content="cv henqo bunga abadi, cv henqo, henqo bunga abadi, konsultan teknik lampung, konsultan lingkungan lampung, pupuk mikroba lampung, general contractor lampung, jasa amdal lampung, industri pupuk alami, perdagangan umum lampung" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-orange-50 pt-20 pb-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
