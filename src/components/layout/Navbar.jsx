import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Testimonios', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label, href) => {
    setActive(label)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 py-4 transition-all duration-400 ${
      scrolled
        ? 'bg-bg-base/85 backdrop-blur-xl border-b border-border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative z-20">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="neon-text font-headline text-lg md:text-2xl font-black tracking-tighter cursor-pointer border-none bg-transparent p-0 flex-shrink-0"
        >
          ANDYCODETECH
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNav(item.label, item.href)}
              className={`bg-transparent border-none cursor-pointer font-mono text-[0.8rem] tracking-[0.2em] uppercase transition-all duration-300 pb-0.5 ${
                active === item.label
                  ? 'text-cyan border-b border-cyan'
                  : 'text-muted hover:text-text border-b border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNav('Contact', '#contact')}
          className="neon-btn hidden md:block px-6 py-2.5 font-mono text-[0.65rem] tracking-[0.15em] uppercase border-none cursor-pointer"
        >
          Contáctame
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-text flex flex-col gap-1.5 p-1"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-0 md:hidden transition-opacity duration-500 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-bg-base/95 backdrop-blur-xl border-l border-border md:hidden flex flex-col pt-28 px-8 pb-10 gap-8 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => handleNav(item.label, item.href)}
            className={`bg-transparent border-none cursor-pointer text-left font-mono text-lg uppercase tracking-[0.2em] transition-colors duration-300 ${
              active === item.label ? 'text-cyan' : 'text-text hover:text-cyan'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        {/* Mobile menu CTA */}
        <div className="mt-auto pt-8 border-t border-border/50">
          <button
            onClick={() => handleNav('Contact', '#contact')}
            className="neon-btn w-full py-4 font-mono text-[0.8rem] tracking-[0.2em] uppercase border-none cursor-pointer"
          >
            Contáctame →
          </button>
        </div>
      </div>
    </nav>
  )
}
