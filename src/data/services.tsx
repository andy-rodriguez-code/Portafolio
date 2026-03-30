import type { ReactNode } from 'react'

export interface Service {
  title: string
  desc: string
  icon: ReactNode
  iconColor: string
  featured: boolean
}

export const services: Service[] = [
  {
    title: 'Desarrollo Web',
    desc: 'WordPress, HTML/CSS custom, landing pages de alto rendimiento y sitios corporativos optimizados.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    iconColor: 'text-cyan',
    featured: false,
  },
  {
    title: 'E-Commerce',
    desc: 'Tiendas WooCommerce optimizadas para conversión con pasarelas de pago y catálogos inteligentes.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3zM3 9h18M9 21V9"/>
      </svg>
    ),
    iconColor: 'text-cyan',
    featured: true,
  },
  {
    title: 'Automatización & Bots',
    desc: 'Flujos con N8n, Manychat, Bitrix24 y Kommo. Automatiza ventas, soporte y operaciones.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    iconColor: 'text-violet',
    featured: false,
  },
  {
    title: 'SEO & Marketing',
    desc: 'Posicionamiento orgánico, estrategia de contenido digital y analítica para escalar tu presencia.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    iconColor: 'text-muted',
    featured: false,
  },
]
