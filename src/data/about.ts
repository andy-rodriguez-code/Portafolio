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
  { value: '+300%', label: 'Crecimiento tráfico orgánico', accent: 'text-cyan',   bg: 'bg-bg-low',  border: 'border-l-2 border-cyan/25',   offset: 0 },
  { value: '15+',   label: 'Expertos bajo mi liderazgo',  accent: 'text-violet', bg: 'bg-bg-high', border: '',                            offset: 48 },
  { value: '+8',    label: 'Años de experiencia SEO',     accent: 'text-cyan',   bg: 'bg-bg-mid',  border: '',                            offset: -48 },
  { value: 'SGE',   label: 'Estratega Gen-AI & AEO',      accent: 'text-text',   bg: 'bg-bg-low',  border: 'border-r-2 border-violet/25', offset: 0 },
]

export const skills: Skill[] = [
  { label: 'Estrategia SEO IA (AEO/GEO/SGE)', color: 'bg-cyan' },
  { label: 'Auditoría Técnica & Web Vitals', color: 'bg-violet' },
  { label: 'Automatización con Python & N8n', color: 'bg-cyan' },
]
