'use client'
import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    // Saran: Integrasikan dengan EmailJS atau Formspree
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-xl shadow-elegant p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Form Kontak</h2>
      {sent && <div className="bg-green-50 text-green-700 p-3 rounded mb-4">Pesan berhasil dikirim!</div>}
      <div className="mb-4">
        <label className="block font-medium mb-1">Nama</label>
        <input type="text" name="nama" required className="w-full" onChange={handleChange} value={form.nama} />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Email</label>
        <input type="email" name="email" required className="w-full" onChange={handleChange} value={form.email} />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Pesan</label>
        <textarea name="pesan" required rows={4} className="w-full" onChange={handleChange} value={form.pesan} />
      </div>
      <button type="submit" className="btn w-full">Kirim</button>
    </form>
  )
}
