import { useEffect, useState } from 'react'
import profileImg from '../../assets/img/Andy-code.png'
import { AnimatedStat } from '../ui/AnimatedStat'
import { Reveal } from '../ui/Reveal'
import { stats, typewriterTexts } from '../../data/hero'

interface TypewriterTextProps {
  texts: string[]
}

function TypewriterText({ texts }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setDeleting(false)
          setTextIndex(i => (i + 1) % texts.length)
        }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts])

  return (
    <span className="text-cyan">
      {displayed}
      <span className="border-r-2 border-cyan ml-0.5 animate-[blink_1s_step-end_infinite]" />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-violet/8 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 items-center">

        {/* Left: Text */}
        <Reveal delay={0.1} className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Badge */}
          <div className="flex w-fit items-center justify-center gap-3 px-6 py-2 md:px-4 md:py-2 rounded-full bg-cyan/6 border border-cyan/15">
            <span className="size-2 rounded-full bg-cyan animate-[pulse-glow_2s_ease-in-out_infinite] block" />
            <span className="font-mono text-[0.5rem] md:text-[0.65rem] tracking-[0.25em] md:tracking-[0.2em] uppercase text-muted">
              Disponible para proyectos Full-time
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline uppercase tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(2.3rem, 7vw, 5rem)' }}>
            <span className="neon-text">Crea, Conecta</span>
            <br />
            <span className="text-text">y Conquista</span>
          </h1>

          {/* Mobile Photo */}
          <Reveal delay={0.15} className="flex lg:hidden justify-center items-center w-full max-w-[280px] sm:max-w-[320px] mx-auto py-2">
            <img
              src={profileImg}
              alt="Andres Jiar Soto"
              className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105 hover:-translate-y-1 cursor-default"
            />
          </Reveal>

          {/* Typewriter */}
          <p className="font-body text-base md:text-lg text-muted leading-relaxed mx-auto md:mx-0 max-w-xl">
            Especialista en: {' '}
            <TypewriterText texts={typewriterTexts} />
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row w-full sm:w-[80%] md:w-auto justify-center md:justify-start gap-4 mx-auto md:mx-0">
            <a
              href="#contacto"
              className="neon-btn w-full md:w-auto px-8 py-5 md:py-4 border-none cursor-pointer font-mono text-[0.85rem] md:text-[0.7rem] tracking-[0.15em] uppercase flex items-center justify-center no-underline"
            >
              Trabajar Juntos →
            </a>
            <a
              href="#proyectos"
              className="w-full md:w-auto px-8 py-5 md:py-4 border border-cyan/20 bg-transparent text-text cursor-pointer font-mono text-[0.85rem] md:text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-cyan/5 hover:border-cyan flex items-center justify-center no-underline"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-10 pt-10 border-t border-border w-full">
            {stats.map(s => (
              <div key={s.label}>
                <AnimatedStat value={s.value} className="font-headline text-5xl font-bold text-cyan" />
                <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right: Photo */}
        <Reveal delay={0.3} className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-[400px]">
            <img
              src={profileImg}
              alt="Andres Jiar Soto"
              className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 hover:-translate-y-2 cursor-default"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
