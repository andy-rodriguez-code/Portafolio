import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: '"Técnicamente sólido y creativamente atrevido. Una combinación rara en la industria."',
    name: 'Carlos Mendoza',
    role: 'CTO, TechFlow CO',
    featured: false,
  },
  {
    quote: '"El nivel de precisión en los sistemas que construyó para nosotros fue excepcional. Andy es ahora nuestro partner principal para todos los proyectos de automatización."',
    name: 'María Fernández',
    role: 'Directora Digital, Grupo Ariansi',
    featured: true,
  },
  {
    quote: '"Transformó nuestra interfaz obsoleta en una solución moderna y funcional. La retención de usuarios se duplicó en meses."',
    name: 'Luis Pérez',
    role: 'CEO, Balsora Store',
    featured: false,
  },
]

const Stars = ({ size = 'sm' }) => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width={size === 'sm' ? 14 : 18} height={size === 'sm' ? 14 : 18} viewBox="0 0 24 24" fill="oklch(85% 0.18 175)">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={ref} className="pt-12 pb-24 md:py-32 px-8 bg-bg-base overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col items-center text-center mb-0 md:mb-16 lg:mb-24 w-full">
          <div className="font-mono text-[0.7rem] md:text-[0.9rem] tracking-[0.4em] uppercase text-cyan mb-4">Lo que Dicen</div>
          <h2 className="font-headline uppercase font-black tracking-tighter text-text leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Nuestros <br className="hidden md:block"/> Clientes
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="reveal relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[400px] lg:min-h-[350px]" style={{ transitionDelay: '0.2s' }}>
          
          {/* Back arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:-left-20 z-50 w-12 h-12 flex items-center justify-center border border-white/20 bg-bg-base/80 backdrop-blur-md text-white transition-all duration-300 hover:bg-cyan hover:border-cyan hover:text-black cursor-pointer group"
            aria-label="Testimonio anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Stack */}
          <div className="relative w-full h-[320px] lg:h-[400px] flex items-center justify-center">
            {testimonials.map((t, i) => {
              const N = testimonials.length;
              let diff = i - currentIndex;
              
              if (diff < -Math.floor(N/2)) diff += N;
              if (diff > Math.floor(N/2)) diff -= N;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              return (
                <div
                  key={i}
                  className={`absolute w-full max-w-[320px] lg:max-w-[400px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCenter ? 'opacity-100 translate-x-0 scale-100 lg:scale-105 z-20' : 
                    isLeft ? 'opacity-0 md:opacity-50 -translate-x-[100%] lg:-translate-x-[110%] scale-95 z-10 grayscale' : 
                    isRight ? 'opacity-0 md:opacity-50 translate-x-[100%] lg:translate-x-[110%] scale-95 z-10 grayscale' : 
                    'opacity-0 scale-90 z-0 pointer-events-none'
                  }`}
                  onClick={() => !isCenter && setCurrentIndex(i)}
                  style={{ cursor: isCenter ? 'default' : 'pointer' }}
                >
                  <div className={`h-full flex flex-col transition-all duration-700 ${isCenter ? 'glass border-t-2 border-cyan p-8 md:p-10 shadow-[0_30px_60px_oklch(85%_0.18_175/0.1)] rounded-sm' : 'bg-bg-surface p-8 md:p-10 rounded-sm'}`}>
                    <Stars size={isCenter ? 'lg' : 'sm'} />
                    <p className={`font-body leading-relaxed mb-8 flex-1 ${isCenter ? 'text-text text-[1rem]' : 'text-muted italic text-sm'}`}>
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className={`rounded-full flex items-center justify-center bg-bg-high font-headline text-cyan flex-shrink-0 ${isCenter ? 'size-14 border border-cyan/50 text-xl shadow-[0_0_15px_oklch(85%_0.18_175/0.2)]' : 'size-10 border border-white/5 text-base'}`}>
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-headline text-xs tracking-[0.1em] uppercase text-text mb-1">{t.name}</div>
                        <div className={`font-mono text-[0.6rem] uppercase tracking-widest ${isCenter ? 'text-cyan' : 'text-muted'}`}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Forward arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:-right-20 z-50 w-12 h-12 flex items-center justify-center border border-white/20 bg-bg-base/80 backdrop-blur-md text-white transition-all duration-300 hover:bg-cyan hover:border-cyan hover:text-black cursor-pointer group"
            aria-label="Siguiente testimonio"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12 mb-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i ? 'bg-cyan w-8' : 'bg-white/20 hover:bg-white/50'}`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
