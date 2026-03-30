import { useEffect, useRef } from 'react'
import { AnimatedStat } from './Hero'

const statCards = [
  { value: '98%',  label: 'Proyectos a tiempo',     accent: 'text-cyan',   bg: 'bg-bg-low',     border: 'border-l-2 border-cyan/25', offset: 0 },
  { value: '2.5k', label: 'Horas de desarrollo',    accent: 'text-violet', bg: 'bg-bg-high',    border: '',                          offset: 48 },
  { value: '+20',  label: 'Proyectos completados',   accent: 'text-cyan',   bg: 'bg-bg-mid',     border: '',                          offset: -48 },
  { value: '5+',   label: 'Herramientas automatización.',      accent: 'text-text',   bg: 'bg-bg-low',     border: 'border-r-2 border-violet/25', offset: 0 },
]

const skills = [
  { label: 'Desarrollo WordPress & Custom', color: 'bg-cyan' },
  { label: 'Automatización con N8n & Manychat', color: 'bg-violet' },
  { label: 'SEO & Estrategia Digital', color: 'bg-cyan' },
]

export default function About() {
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
    <section id="about" ref={ref} className="relative py-32 px-8 bg-bg-surface overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-radial-[at_top_right] from-violet/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-17 items-center">

        {/* Left */}
        <div className="reveal space-y-8 flex flex-col items-center md:items-start text-center md:text-left" style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline uppercase tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            El arquitecto<br />
            <span className="italic text-cyan">detrás del código.</span>
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-3 text-cyan">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Verificado · Disponible</span>
          </div>

          <p className="font-body text-base md:text-lg text-justify md:text-left text-muted leading-relaxed max-w-[480px] mx-auto md:mx-0">
            Especialista WordPress y automatización con sede en Bucaramanga, Colombia.
            Construyo sistemas digitales que no solo funcionan — rinden resultados.
            Cada proyecto es un experimento de optimización técnica y UX.
          </p>

          <div className="space-y-4 flex flex-col items-start w-full">
            {skills.map(s => (
              <div key={s.label} className="flex items-center gap-4 group">
                <span className={`${s.color} h-px transition-all duration-400 group-hover:w-20 w-10 block`} />
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-text whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stat cards grid */}
        <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.3s' }}>
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`p-8 aspect-square flex flex-col justify-end ${card.bg} ${card.border} hover:bg-bg-mid transition-colors duration-300`}
              style={{ marginTop: card.offset ? `${card.offset}px` : 0 }}
            >
              <AnimatedStat value={card.value} className={`font-headline text-5xl font-bold mb-2 ${card.accent}`} />
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted leading-snug">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
