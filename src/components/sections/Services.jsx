import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Desarrollo Web',
    desc: 'WordPress, HTML/CSS custom, landing pages de alto rendimiento y sitios corporativos optimizados.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    iconColor: 'text-cyan',
    featured: false,
  },
  {
    title: 'E-Commerce',
    desc: 'Tiendas WooCommerce optimizadas para conversión con pasarelas de pago y catálogos inteligentes.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg>,
    iconColor: 'text-cyan',
    featured: true,
  },
  {
    title: 'Automatización & Bots',
    desc: 'Flujos con N8n, Manychat, Bitrix24 y Kommo. Automatiza ventas, soporte y operaciones.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    iconColor: 'text-violet',
    featured: false,
  },
  {
    title: 'SEO & Marketing',
    desc: 'Posicionamiento orgánico, estrategia de contenido digital y analítica para escalar tu presencia.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
    iconColor: 'text-muted',
    featured: false,
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="pt-24 pb-12 md:py-32 px-8 bg-bg-base">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end mb-16 md:mb-20 gap-6 md:gap-8" style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline uppercase tracking-tighter leading-[1.05] text-center md:text-left"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Mis Servicios
          </h2>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted max-w-[280px] text-center md:text-right leading-relaxed">
            Ejecución precisa en todo el espectro digital. Del concepto al lanzamiento.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20"
          style={{ transitionDelay: '0.2s' }}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative overflow-hidden p-10 flex flex-col items-center md:items-start text-center md:text-left gap-5 transition-all duration-400 group cursor-default
                ${s.featured ? 'bg-bg-highest' : 'bg-bg-surface hover:bg-bg-low'}`}
            >
              {/* Featured accent */}
              {s.featured && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/7 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan" />
                </>
              )}

              <div className={`${s.iconColor} relative z-10`}>{s.icon}</div>
              <h3 className="font-headline text-[1.05rem] font-bold tracking-[0.1em] uppercase text-text relative z-10">
                {s.title}
              </h3>
              <p className="font-body text-sm text-justify md:text-left text-muted leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
