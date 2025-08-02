import Head from 'next/head'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Services from '../src/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>CV Henqo Bunga Abadi | Beranda</title>
        <meta name="description" content="Beranda CV Henqo Bunga Abadi" />
      </Head>
      <Hero />
      <About />
      <Services />
    </>
  )
}
