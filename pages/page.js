import Head from 'next/head'
import Hero from './Hero'
import About from './About'
import Services from './Services'

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
