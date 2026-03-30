import { useState, useEffect } from 'react'
import { navItems } from '../../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label: string) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 py-4 transition-all duration-400 ${
      scrolled
        ? 'bg-bg-base/85 backdrop-blur-xl border-b border-border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative z-20">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={() => handleNav('Inicio')}
          className="neon-text font-headline text-lg md:text-2xl font-black tracking-tighter cursor-pointer no-underline flex-shrink-0"
        >
          ANDYCODETECH
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNav(item.label)}
              className={`no-underline cursor-pointer font-mono text-[0.8rem] tracking-[0.2em] uppercase transition-all duration-300 pb-0.5 ${
                active === item.label
                  ? 'text-cyan border-b border-cyan'
                  : 'text-muted hover:text-text border-b border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          onClick={() => handleNav('Contacto')}
          className="neon-btn hidden md:flex items-center justify-center no-underline px-6 py-2.5 font-mono text-[0.65rem] tracking-[0.15em] uppercase border-none cursor-pointer"
        >
          Contáctame
        </a>

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
          <a
            key={item.label}
            href={item.href}
            onClick={() => handleNav(item.label)}
            className={`no-underline cursor-pointer text-left font-mono text-lg uppercase tracking-[0.2em] transition-colors duration-300 ${
              active === item.label ? 'text-cyan' : 'text-text hover:text-cyan'
            }`}
          >
            {item.label}
          </a>
        ))}

        {/* Mobile menu CTA */}
        <div className="mt-auto pt-8 border-t border-border/50">
          <a
            href="#contacto"
            onClick={() => handleNav('Contacto')}
            className="neon-btn w-full py-4 font-mono text-[0.8rem] tracking-[0.2em] uppercase border-none cursor-pointer no-underline flex items-center justify-center"
          >
            Contáctame →
          </a>
        </div>
      </div>
    </nav>
  )
}
