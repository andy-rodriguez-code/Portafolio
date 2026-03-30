import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { projects, type Project } from '../../data/projects'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))

  return (
    <section id="proyectos" className="pt-12 pb-12 md:py-32 px-8 bg-bg-base overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Title */}
        <Reveal delay={0.1} className="flex flex-col items-center text-center mb-8 md:mb-16 w-full">
          <div className="font-mono text-[0.7rem] md:text-[0.9rem] tracking-[0.4em] uppercase text-cyan mb-4">Proyectos</div>
          <h2 className="font-headline uppercase font-black tracking-tighter text-text leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Realizados
          </h2>
        </Reveal>

        {/* Fan Gallery with Arrows */}
        <Reveal delay={0.2} className="relative w-full flex justify-center items-center mt-8 md:mt-20">

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
              const N = projects.length
              let diff = i - currentIndex
              if (diff < -Math.floor(N / 2)) diff += N
              if (diff > Math.floor(N / 2)) diff -= N
              const fanPos = 3 + diff
              const isActive = fanPos === 3
              const isVisible = fanPos >= 1 && fanPos <= 5
              const cardClass = isVisible ? `work-card-${fanPos}` : 'work-card-hidden'

              return (
                <div
                  key={p.id}
                  className={`work-card ${cardClass} ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(i)
                    else setSelectedProject(p)
                  }}
                  title={isActive ? `Ver detalles de ${p.name}` : ''}
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
              )
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
        </Reveal>

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
        <Reveal delay={0.4} className="text-center mt-16">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-5 border border-cyan/30 bg-transparent text-cyan font-mono text-[0.65rem] tracking-[0.3em] uppercase cursor-pointer transition-all duration-500 hover:bg-cyan hover:text-primary-fg"
          >
            Ver Todos los Proyectos
          </button>
        </Reveal>
      </div>

      {/* Grid Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] bg-bg-base/95 backdrop-blur-xl flex justify-center items-center p-4 lg:p-12">
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="fixed top-4 right-4 lg:top-8 lg:right-8 z-[210] w-12 h-12 flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md text-white/60 hover:text-cyan hover:border-cyan transition-all duration-300 rounded-none cursor-pointer"
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
                <button
                  key={p.id}
                  onClick={() => {
                    setIsModalOpen(false)
                    setSelectedProject(p)
                  }}
                  className="relative group overflow-hidden aspect-square bg-bg-low block p-0 border-none cursor-pointer rounded-none"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  />

                  {/* Hover Cyan Overlay */}
                  <div className="absolute inset-0 bg-cyan/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-2">
                    <h3 className="font-headline text-lg md:text-xl font-bold uppercase tracking-tight text-primary-fg text-center px-4">
                      {p.name}
                    </h3>

                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="w-8 h-8 rounded-full border border-primary-fg/40 flex items-center justify-center text-primary-fg bg-primary-fg/10">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <span className="font-headline text-[0.5rem] font-bold uppercase tracking-[0.2em] text-primary-fg/80">
                        Detalles
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[300] bg-bg-base/90 backdrop-blur-2xl flex justify-center items-center p-4 md:p-8 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-transparent"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-5xl max-h-[85dvh] md:max-h-[58dvh] bg-bg-surface overflow-hidden flex flex-col md:grid md:grid-cols-2 shadow-2xl animate-in zoom-in-95 duration-500 rounded-none">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-white/10 bg-black/40 text-white hover:text-cyan hover:border-cyan transition-all cursor-pointer rounded-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image Side */}
            <div className="flex items-center justify-center p-4 md:p-8 bg-bg-base">
              <div className="relative w-[350px] h-[200px] md:w-[600px] md:h-[400px] overflow-hidden group">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Info Side */}
            <div className="p-6 md:p-8 flex flex-col justify-center gap-3 h-full overflow-y-auto">
              <div>
                <div className={`font-mono text-[0.7rem] tracking-[0.4em] uppercase mb-2 ${selectedProject.accent}`}>
                  {selectedProject.category}
                </div>
                <h2 className="font-headline text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-tight">
                  {selectedProject.name}
                </h2>
              </div>

              <p className="font-body text-muted text-xs md:text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[0.6rem] text-cyan/80 uppercase tracking-wider rounded-none">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn px-8 py-3 flex items-center justify-center gap-3 no-underline text-center"
                >
                  Visitar Proyecto
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 border border-white/10 text-white/60 font-mono text-[0.7rem] uppercase tracking-widest hover:bg-white/5 transition-all cursor-pointer"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
