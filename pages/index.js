import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CV Henqo Bunga Abadi | Under Maintenance</title>
        <meta name="description" content="Website sedang dalam pemeliharaan" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          🚧 Under Maintenance 🚧
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Website kami sedang dalam pemeliharaan untuk memberikan pengalaman terbaik.
        </p>
        <div className="bg-white text-gray-800 px-6 py-3 rounded-2xl shadow-lg">
          <p className="font-semibold">Silakan kunjungi kembali beberapa saat lagi.</p>
        </div>
      </main>
    </>
  )
}
