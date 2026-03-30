export interface Testimonial {
  quote: string
  name: string
  role: string
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote: '"Técnicamente sólido y creativamente atrevido. Una combinación rara en la industria."',
    name: 'Carlos Mendoza',
    role: 'CTO, TechFlow CO',
    featured: false,
  },
  {
    quote: '"El nivel de precisión en los sistemas que construyó para nosotros fue excepcional. Andy es ahora nuestro partner principal para todos los proyectos de automatización."',
    name: 'María Fernández',
    role: 'Directora Digital, Grupo Ariansi',
    featured: true,
  },
  {
    quote: '"Transformó nuestra interfaz obsoleta en una solución moderna y funcional. La retención de usuarios se duplicó en meses."',
    name: 'Luis Pérez',
    role: 'CEO, Balsora Store',
    featured: false,
  },
]
