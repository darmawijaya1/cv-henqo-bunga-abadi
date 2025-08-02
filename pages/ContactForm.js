import ContactForm from '../src/components/ContactForm'

export default function KontakPage() {
  return (
    <section className="py-12">
      <ContactForm />
      <div className="max-w-lg mx-auto mt-8">
        <iframe
          src="https://www.google.com/maps?q=Jl.+Raden+Fattah+No.21,+Tanjung+Karang+Pusat,+Bandar+Lampung&output=embed"
          width="100%" height="250" allowFullScreen="" loading="lazy"
          className="rounded-xl shadow"
        ></iframe>
      </div>
    </section>
  )
}
