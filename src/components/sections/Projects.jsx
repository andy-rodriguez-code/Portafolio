import { useEffect, useRef, useState } from 'react'

import imgComfacundi from '../../assets/img/Comfacundi.webp'
import imgPersonas from '../../assets/img/Personas.webp'
import imgEmpresas from '../../assets/img/Empresas.webp'
import imgCubyco from '../../assets/img/Cubyco.webp'
import imgTrendyPhotographic from '../../assets/img/Trendy-Photograpic.webp'
import imgTerrum from '../../assets/img/Terrum.webp'
import imgAriansiGroup from '../../assets/img/Ariansi-group.webp'
import imgCastillaReal from '../../assets/img/Castilla-real.webp'
import imgCampestreMiranda from '../../assets/img/Campestre-miranda.webp'
import imgEsteticaPereira from '../../assets/img/Estetita-pereira.webp'
import imgXigua from '../../assets/img/Xigua.webp'
import imgGrifos from '../../assets/img/Grifos.webp'
import imgCavana from '../../assets/img/Cavana.webp'
import imgMilan70 from '../../assets/img/Milan-70.webp'
import imgPraderaViva from '../../assets/img/Pradera-viva.webp'
import imgClubDelAsado from '../../assets/img/club-del-asado.webp'

const projects = [
  { id: 1, name: 'Comfacundi', category: 'Caja de Compensación', tech: 'Desarrollo a la medida', code: 'V01', accent: 'text-cyan', img: imgComfacundi, link: 'https://comfacundi.com.co/' },
  { id: 2, name: 'Comfacundi Personas', category: 'Caja de compensación', tech: 'Desarrollo a la medida', code: 'V02', accent: 'text-cyan', img: imgPersonas, link: 'https://eventos.comfacundi.com.co/personas/' },
  { id: 3, name: 'Comfacundi Empresas', category: 'Caja de compensación', tech: 'Desarrollo a la medida', code: 'V03', accent: 'text-cyan', img: imgEmpresas, link: 'https://eventos.comfacundi.com.co/empresas/' },
  { id: 4, name: 'Cubyco', category: 'Real Estate', tech: 'Wordpress', code: 'V04', accent: 'text-cyan', img: imgCubyco, link: 'https://cubyco.co/' },
  { id: 5, name: 'Trendyphotographic', category: 'Servicios multimedia', tech: 'WordPress / Woocommerce', code: 'V05', accent: 'text-cyan', img: imgTrendyPhotographic, link: 'https://trendyphotographic.com/' },
  { id: 6, name: 'Terrum', category: 'Real Estate', tech: 'WordPress', code: 'V06', accent: 'text-cyan', img: imgTerrum, link: 'https://terrum.constructoracamu.com/' },
  { id: 7, name: 'Ariansigroup', category: 'Real Estate', tech: 'WordPress', code: 'V07', accent: 'text-cyan', img: imgAriansiGroup, link: 'https://landing.ariasigroup.com/' },
  { id: 8, name: 'Castilla Real', category: 'Real Estate', tech: 'WordPress', code: 'V08', accent: 'text-cyan', img: imgCastillaReal, link: 'https://castellareservadolanding.constructoraarinsa.com/' },
  { id: 9, name: 'Campestre Miranda', category: 'Hotelería y Turismo', tech: 'WordPress', code: 'V09', accent: 'text-cyan', img: imgCampestreMiranda, link: 'https://www.campestremiranda.com/' },
  { id: 10, name: 'Estética Pereira', category: 'Belleza y Estética', tech: 'WordPress', code: 'V10', accent: 'text-cyan', img: imgEsteticaPereira, link: 'https://esteticaenpereira.com/' },
  { id: 11, name: 'Xigua', category: 'Salud y Bienestar', tech: 'WordPress / Woocommerce', code: 'V11', accent: 'text-cyan', img: imgXigua, link: 'https://www.xigua.com.co/' },
  { id: 12, name: 'Grifos', category: 'Construcción y equipamiento', tech: 'WordPress', code: 'V12', accent: 'text-cyan', img: imgGrifos, link: 'https://grifos.net/' },
  { id: 13, name: 'Cavanna', category: 'Real Estate', tech: 'WordPress', code: 'V13', accent: 'text-cyan', img: imgCavana, link: 'https://cavanna.constructoracamu.com/' },
  { id: 14, name: 'Milán 70', category: 'Real Estate', tech: 'WordPress', code: 'V14', accent: 'text-cyan', img: imgMilan70, link: 'https://milan170.constructoracamu.com/' },
  { id: 15, name: 'Pradera Viva', category: 'Real Estate', tech: 'WordPress', code: 'V15', accent: 'text-cyan', img: imgPraderaViva, link: 'https://pradera-viva.constructoracamu.com/' },
  { id: 16, name: 'club del Asado', category: 'Gastronomía', tech: 'WordPress / Woocommerce', code: 'V16', accent: 'text-cyan', img: imgClubDelAsado, link: 'https://elclubdelasado.com.co/' }
    
]
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with middle project
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="pt-12 pb-12 md:py-32 px-8 bg-bg-base overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Title */}
        <div className="reveal flex flex-col items-center text-center mb-8 md:mb-16 w-full" style={{ transitionDelay: '0.1s' }}>
          <div className="font-mono text-[0.7rem] md:text-[0.9rem] tracking-[0.4em] uppercase text-cyan mb-4">Proyectos</div>
          <h2 className="font-headline uppercase font-black tracking-tighter text-text leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Realizados
          </h2>
        </div>

        {/* Fan Gallery with Arrows */}
        <div className="reveal relative w-full flex justify-center items-center mt-8 md:mt-20" style={{ transitionDelay: '0.2s' }}>
          
          {/* Back arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:left-12 z-50 w-12 h-12 flex items-center justify-center border border-white/20 bg-bg-base/80 backdrop-blur-md text-white transition-all duration-300 hover:bg-cyan hover:border-cyan hover:text-black cursor-pointer group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Stack */}
          <div className="work-stack w-full max-w-4xl mx-auto">
            {projects.map((p, i) => {
              const N = projects.length;
              let diff = i - currentIndex;
              if (diff < -Math.floor(N/2)) diff += N;
              if (diff > Math.floor(N/2)) diff -= N;
              const fanPos = 3 + diff;
              const isActive = fanPos === 3;

              const isVisible = fanPos >= 1 && fanPos <= 5;
              const cardClass = isVisible ? `work-card-${fanPos}` : 'work-card-hidden';

              return (
                <div 
                  key={p.id} 
                  className={`work-card ${cardClass} ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(i);
                    else window.open(p.link, '_blank', 'noopener,noreferrer');
                  }}
                  title={isActive ? `Visitar proyecto ${p.name}` : ''}
                >
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className="card-overlay" />
                  <div className="work-card-info">
                    <div className={`font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-2 ${p.accent}`}>{p.category}</div>
                    <h3 className="font-headline text-xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2 md:mb-3">{p.name}</h3>
                    <p className={`font-body text-xs mb-4 ${p.accent}`}>{p.tech}</p>
                    <div className="flex items-center gap-3 font-mono text-[0.6rem] text-white/30 uppercase">
                      <span>{p.code}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Forward arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:right-12 z-50 w-12 h-12 flex items-center justify-center border border-white/20 bg-bg-base/80 backdrop-blur-md text-white transition-all duration-300 hover:bg-cyan hover:border-cyan hover:text-black cursor-pointer group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-4 mb-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i ? 'bg-cyan w-8' : 'bg-white/20 hover:bg-white/50'}`}
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16" style={{ transitionDelay: '0.4s' }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-5 border border-cyan/30 bg-transparent text-cyan font-mono text-[0.65rem] tracking-[0.3em] uppercase cursor-pointer transition-all duration-500 hover:bg-cyan hover:text-primary-fg"
          >
            Ver Todos los Proyectos
          </button>
        </div>
      </div>

      {/* Grid Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] bg-bg-base/95 backdrop-blur-xl flex justify-center items-center p-4 lg:p-12">
          {/* Close button */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="fixed top-4 right-4 lg:top-8 lg:right-8 z-[210] w-12 h-12 flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md text-white/60 hover:text-cyan hover:border-cyan transition-all duration-300 rounded-sm cursor-pointer"
            aria-label="Cerrar galería"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Grid Container */}
          <div className="w-full h-full max-w-[1400px] mx-auto overflow-y-auto mt-16 lg:mt-0 pt-0 pb-10 pr-2">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white mb-10 text-center">
              Todos los <span className="text-cyan">Proyectos</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
              {projects.map(p => (
                <a 
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="relative group overflow-hidden aspect-square bg-bg-low block border border-white/5"
                >
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" 
                  />
                  
                  {/* Hover Cyan Overlay */}
                  <div className="absolute inset-0 bg-cyan/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-4">
                    <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-primary-fg text-center px-4">
                      {p.name}
                    </h3>
                    
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full border border-primary-fg/40 flex items-center justify-center text-primary-fg bg-primary-fg/10">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                      <span className="font-headline text-[0.6rem] font-bold uppercase tracking-[0.25em] text-primary-fg/80 text-center px-4">
                        Ver Proyecto
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
