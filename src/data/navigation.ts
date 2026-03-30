export interface NavItem {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
]

export const footerLinks: FooterLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andy-rodriguez-code/' },
  { label: 'GitHub', href: 'https://github.com/andy-rodriguez-code' },
  { label: 'WhatsApp', href: 'https://wa.link/gmzcf9' },
]
