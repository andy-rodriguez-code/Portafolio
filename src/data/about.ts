export interface StatCard {
  value: string
  label: string
  accent: string
  bg: string
  border: string
  offset: number
}

export interface Skill {
  label: string
  color: string
}

export const statCards: StatCard[] = [
  { value: '+45%', label: 'Crecimiento tráfico orgánico', accent: 'text-cyan',   bg: 'bg-bg-low',  border: 'border-l-2 border-cyan/25',   offset: 0 },
  { value: '3+',   label: 'Años de experiencia en Real Estate',  accent: 'text-violet', bg: 'bg-bg-high', border: '',                            offset: 48 },
  { value: '+17',    label: 'Proyectos realizados',     accent: 'text-cyan',   bg: 'bg-bg-mid',  border: '',                            offset: -48 },
  { value: '+6',   label: 'Actomatizaciones Realizadas',      accent: 'text-text',   bg: 'bg-bg-low',  border: 'border-r-2 border-violet/25', offset: 0 },
]

export const skills: Skill[] = [
  { label: 'Estrategia SEO IA ', color: 'bg-cyan' },
  { label: 'Plugins y Wordpress a la medida', color: 'bg-violet' },
  { label: 'Automatización con N8n', color: 'bg-cyan' },
]
