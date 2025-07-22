export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white text-center py-5 mt-10 rounded-t-2xl shadow-elegant">
      <div>
        <p className="font-bold text-lg">CV. Henqo Bunga Abadi</p>
        <p>Jl. Raden Fattah No.21, Tanjung Karang Pusat, Bandar Lampung</p>
        <p>Email: <a href="mailto:henqobungaabadi@gmail.com">henqobungaabadi@gmail.com</a> | Telp: 082175111972</p>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} CV. Henqo Bunga Abadi. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
