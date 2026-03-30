import { footerLinks } from '../../data/navigation'

export default function Footer() {
  const sections = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'FAQ', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer
      className="border-t border-border py-12 px-8 bg-bg-surface/80"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#inicio" className="neon-text font-headline text-lg md:text-xl font-black tracking-tighter no-underline">
            ANDYCODETECH
          </a>

          {/* Internal links — SEO internal linking */}
          <nav aria-label="Footer navegación SEO" className="flex flex-wrap justify-center gap-6">
            {sections.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-muted hover:text-cyan transition-colors duration-300 no-underline"
              >
                {s.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex justify-center flex-wrap gap-6">
            {footerLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-muted hover:text-cyan transition-colors duration-300 no-underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row — Schema address + copyright */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-border/30"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content="Andy Code Tech" />
          <meta itemProp="url" content="https://andycodetech.com" />
          <meta itemProp="email" content="andycodetech@gmail.com" />
          <span
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="font-mono text-[0.65rem] text-muted tracking-[0.1em] uppercase"
          >
            <meta itemProp="addressLocality" content="Bucaramanga" />
            <meta itemProp="addressRegion" content="Santander" />
            <meta itemProp="addressCountry" content="CO" />
            📍 Bucaramanga, Santander, Colombia — Servicios remotos Latinoamérica
          </span>

          <div className="font-mono text-[0.65rem] text-muted tracking-[0.1em] uppercase">
            © 2026 Andres Jair Soto — Desarrollo Web WordPress, SEO & Automatización
          </div>
        </div>
      </div>
    </footer>
  )
}
