import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { contactInfo, socials, APPS_SCRIPT_URL } from '../../data/contact'

interface FormState {
  nombre: string
  apellido: string
  email: string
  telefono: string
  mensaje: string
}

const emptyForm: FormState = { nombre: '', apellido: '', email: '', telefono: '', mensaje: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      if (response.ok) {
        setSent(true)
        setForm(emptyForm)
        // Limpiar el estado de éxito después de 4s — formulario vuelve vacío
        setTimeout(() => setSent(false), 4000)
      } else {
        setError('Error al enviar el formulario. Por favor intenta de nuevo.')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('No se pudo conectar con el servidor. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="py-12 md:py-32 px-8 bg-bg-surface">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left: Info */}
        <Reveal>
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

          {/* Social pills — gradient border + real icons */}
          <div className="flex justify-center md:justify-start gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.url}
                target={s.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="relative group size-14 md:size-12 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110"
                style={{
                  background: 'oklch(15% 0.018 270)',
                  borderRadius: 0,
                }}
              >
                {/* Gradient border via pseudo-box trick: inset box-shadow doesn't do gradient,
                    so we fake it with an absolutely positioned gradient bg + inner mask */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, oklch(85% 0.18 175), oklch(45% 0.25 300))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* Icon with gradient fill via SVG linearGradient */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id={`grad-${s.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="oklch(85% 0.18 175)" />
                      <stop offset="100%" stopColor="oklch(45% 0.25 300)" />
                    </linearGradient>
                  </defs>
                </svg>
                <span
                  className="relative z-10"
                  style={{ color: `url(#grad-${s.name})`, fill: `url(#grad-${s.name})` }}
                >
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: Form */}
        <Reveal delay={0.2} className="glass border border-border p-6 md:p-12 relative overflow-hidden">
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
                {([
                  { key: 'nombre', label: 'Nombre', placeholder: 'Juan' },
                  { key: 'apellido', label: 'Apellido', placeholder: 'Pérez' },
                ] as const).map(f => (
                  <div key={f.key}>
                    <label className="block font-mono text-[0.75rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">{f.label}</label>
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
                  <label className="block font-mono text-[0.75rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-border/40 pb-2 text-text font-body text-base outline-none transition-all duration-300 focus:border-cyan placeholder:text-muted/40"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.75rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Teléfono</label>
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
                <label className="block font-mono text-[0.75rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-2">Mensaje *</label>
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
                className="neon-btn w-full py-5 md:py-4 border-none cursor-pointer font-mono text-[0.85rem] md:text-[0.8rem] tracking-[0.2em] uppercase rounded-none disabled:opacity-70 disabled:cursor-wait mt-4"
              >
                {sending ? 'Enviando Datos...' : 'Iniciar Conexión →'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
