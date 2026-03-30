import { Reveal } from '../ui/Reveal'
import { row1, row2 } from '../../data/technologies'

interface MarqueeRowProps {
  items: string[]
  reverse?: boolean
}

function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${reverse ? 'marquee-reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-2 md:py-3 font-mono text-[0.8rem] md:text-[1rem] tracking-[0.25em] uppercase transition-colors duration-300 cursor-default select-none"
            style={{
              color: reverse ? 'oklch(45% 0.25 300 / 0.6)' : 'oklch(85% 0.18 175 / 0.5)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.color = reverse ? 'oklch(45% 0.25 300)' : 'oklch(85% 0.18 175)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = ''
              e.currentTarget.style.color = ''
            }}
          >
            {item}
            <span className="block w-1 h-1 rounded-full" style={{ background: reverse ? 'oklch(45% 0.25 300 / 0.3)' : 'oklch(85% 0.18 175 / 0.3)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="pt-12 pb-12 md:py-32 overflow-hidden bg-bg-base">
      {/* Section label */}
      <Reveal delay={0.1} className="flex flex-col items-center w-full text-center mb-16 px-8">
        <div className="font-mono text-[0.7rem] md:text-[0.9rem] tracking-[0.4em] uppercase text-cyan mb-4">Mi Stack</div>
        <h2 className="font-headline uppercase font-black tracking-tighter text-text leading-[1.05]"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
          Tecnológico
        </h2>
      </Reveal>

      {/* Marquees */}
      <Reveal delay={0.2} className="space-y-4">
        {/* Divider */}
        <div className="w-full h-px bg-border/40 mb-2" />
        <MarqueeRow items={row1} reverse={false} />
        <div className="w-full h-px bg-border/20" />
        <MarqueeRow items={row2} reverse={true} />
        <div className="w-full h-px bg-border/40 mt-2" />
      </Reveal>
    </section>
  )
}
