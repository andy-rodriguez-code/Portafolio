const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andy-rodriguez-code/' },
  { label: 'GitHub', href: 'https://github.com/andy-rodriguez-code' },
  { label: 'WhatsApp', href: 'https://wa.link/gmzcf9' }, 

]

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-8 bg-bg-surface/80">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-6 md:gap-8">
        <div className="neon-text font-headline text-lg md:text-xl font-black tracking-tighter">
        ANDYCODETECH
        </div>
        <div className="font-mono text-[0.8rem] text-muted tracking-[0.15em] uppercase">
          © 2025 Andres Jair Soto · Bucaramanga, Colombia
        </div>
        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8rem] tracking-[0.15em] uppercase text-muted hover:text-cyan transition-colors duration-300 no-underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
