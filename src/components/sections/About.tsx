import { AnimatedStat } from '../ui/AnimatedStat'
import { Reveal } from '../ui/Reveal'
import { statCards, skills } from '../../data/about'

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-8 bg-bg-surface overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-radial-[at_top_right] from-violet/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-17 items-center">

        {/* Left */}
        <Reveal delay={0.1} className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
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
        </Reveal>

        {/* Right: Stat cards grid */}
        <Reveal delay={0.3} className="grid grid-cols-2 gap-4">
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
        </Reveal>
      </div>
    </section>
  )
}
