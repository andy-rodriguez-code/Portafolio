import { Reveal } from '../ui/Reveal'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="servicios" className="pt-24 pb-12 md:py-32 px-8 bg-bg-base">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <Reveal delay={0.1} className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end mb-16 md:mb-20 gap-6 md:gap-8">
          <h2 className="font-headline uppercase tracking-tighter leading-[1.05] text-center md:text-left"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Mis Servicios
          </h2>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted max-w-[280px] text-center md:text-right leading-relaxed">
            Ejecución precisa en todo el espectro digital. Del concepto al lanzamiento.
          </p>
        </Reveal>

        {/* Cards */}
        <Reveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20">
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
        </Reveal>
      </div>
    </section>
  )
}
