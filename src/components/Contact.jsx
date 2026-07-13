export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>

      <div className="mt-6 max-w-xl">
        <p className="text-gray-300">Prefer email? <a href="mailto:your.email@example.com" className="text-cyan-400">your.email@example.com</a></p>

        <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent('Portfolio contact')}&body=${encodeURIComponent('Please write your message here')}` }}>
          <input name="name" placeholder="Your name" className="px-3 py-2 bg-slate-800 rounded text-gray-200" />
          <input name="email" placeholder="Your email" className="px-3 py-2 bg-slate-800 rounded text-gray-200" />
          <textarea name="message" placeholder="Message" rows={5} className="px-3 py-2 bg-slate-800 rounded text-gray-200" />
          <button type="submit" className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
