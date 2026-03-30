import { useEffect, useRef, useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'andycodetech@gmail.com',
    iconPath: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    accent: 'text-cyan',
    iconBg: 'bg-bg-high',
  },
  {
    label: 'Ubicación',
    value: 'Bucaramanga, Colombia',
    iconPath: <><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    accent: 'text-violet',
    iconBg: 'bg-bg-high',
  },
  {
    label: 'Disponibilidad',
    value: 'Full-time',
    iconPath: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    accent: 'text-cyan',
    iconBg: 'bg-bg-high',
  },
]

const socials = [
  { name: 'LI', url: 'https://www.linkedin.com/in/andy-rodriguez-code/' },
  { name: 'GH', url: 'https://github.com/andy-rodriguez-code' },
  { name: 'WA', url: 'https://wa.link/gmzcf9' }
]

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzx0jrzRzx8NK9FwXZVwHPdbz-_APYM_MtUlOQpXbvra4AqZle_7wFFpT9pXB_napIrfg/exec';

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSent(false)
    setError('')

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (result.success) {
        setSent(true)
        setForm({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' })
      } else {
        setError(result.error || 'Error al enviar el formulario.')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('No se pudo conectar con el servidor. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-12 md:py-32 px-8 bg-bg-surface">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left: Info */}
        <div className="reveal">
          <h2 className="font-headline uppercase tracking-tighter leading-[0.9] mb-6 text-center md:text-left"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Estas listo?<br />
            <span className="neon-text">Contactame</span>
          </h2>
          <p className="font-body text-base md:text-lg text-justify md:text-left text-muted max-w-[400px] mx-auto md:mx-0 leading-relaxed mb-12">
            Construyamos algo que mueva el negocio y la pantalla. Disponible para proyectos freelance y colaboraciones.
          </p>

          <div className="space-y-8 mb-12">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className={`size-13 flex items-center justify-center rounded-full flex-shrink-0 ${item.iconBg} ${item.accent} transition-transform duration-300 group-hover:scale-110`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {item.iconPath}
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-0.5">{item.label}</div>
                  <div className="font-headline text-base text-text">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social pills */}
          <div className="flex justify-center md:justify-start gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.url}
                target={s.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="size-12 flex items-center justify-center border border-border/50 text-muted font-mono text-[0.65rem] font-bold no-underline transition-all duration-300 hover:border-cyan hover:text-cyan"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="reveal glass border border-border p-6 md:p-12 relative overflow-hidden" style={{ transitionDelay: '0.2s' }}>
          {/* Glow */}
          <div className="absolute -top-4 -right-4 size-24 bg-cyan/15 blur-[40px] pointer-events-none" />

          {sent ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-headline text-2xl text-cyan mb-3">¡Mensaje enviado!</h3>
              <p className="font-body text-muted">Te responderé en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: 'nombre', label: 'Nombre', placeholder: 'Juan' },
                  { key: 'apellido', label: 'Apellido', placeholder: 'Pérez' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-border/40 pb-2 text-text font-body text-base outline-none transition-all duration-300 focus:border-cyan placeholder:text-muted/40"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-border/40 pb-2 text-text font-body text-base outline-none transition-all duration-300 focus:border-cyan placeholder:text-muted/40"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={form.telefono}
                    onChange={e => setForm({ ...form, telefono: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-border/40 pb-2 text-text font-body text-base outline-none transition-all duration-300 focus:border-cyan placeholder:text-muted/40"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Mensaje *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe brevemente tu proyecto..."
                  value={form.mensaje}
                  onChange={e => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-border/40 pb-2 text-text font-body text-base outline-none transition-all duration-300 focus:border-cyan resize-none placeholder:text-muted/40"
                />
              </div>

              {error && (
                <div className="font-mono text-[0.7rem] text-red-500 uppercase tracking-widest text-center mt-4">
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="neon-btn w-full py-4 border-none cursor-pointer font-mono text-[0.8rem] tracking-[0.2em] uppercase rounded-none disabled:opacity-70 disabled:cursor-wait mt-4"
              >
                {sending ? 'Enviando Datos...' : 'Iniciar Conexión →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
