import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CV Henqo Bunga Abadi | Website Sedang Down</title>
        <meta name="description" content="Website sedang tidak dapat diakses untuk sementara waktu" />
      </Head>
      <main className="flex h-screen items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            🚫 Website Sedang Down
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Mohon maaf, website kami tidak dapat diakses untuk sementara waktu.  
            Silakan coba kembali beberapa saat lagi.
          </p>
        </div>
      </main>
    </>
  )
}
