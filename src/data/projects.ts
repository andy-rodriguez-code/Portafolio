import imgComfacundi from '../assets/img/Comfacundi.webp'
import imgPersonas from '../assets/img/Personas.webp'
import imgEmpresas from '../assets/img/Empresas.webp'
import imgCubyco from '../assets/img/Cubyco.webp'
import imgTrendyPhotographic from '../assets/img/Trendy-Photograpic.webp'
import imgTerrum from '../assets/img/Terrum.webp'
import imgAriansiGroup from '../assets/img/Ariansi-group.webp'
import imgCastillaReal from '../assets/img/Castilla-real.webp'
import imgCampestreMiranda from '../assets/img/Campestre-miranda.webp'
import imgEsteticaPereira from '../assets/img/Estetita-pereira.webp'
import imgXigua from '../assets/img/Xigua.webp'
import imgGrifos from '../assets/img/Grifos.webp'
import imgCavana from '../assets/img/Cavana.webp'
import imgMilan70 from '../assets/img/Milan-70.webp'
import imgPraderaViva from '../assets/img/Pradera-viva.webp'
import imgClubDelAsado from '../assets/img/club-del-asado.webp'

export interface Project {
  id: number
  name: string
  category: string
  tech: string
  code: string
  accent: string
  img: string
  link: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1, name: 'Comfacundi', category: 'Caja de Compensación', tech: 'Desarrollo a la medida', code: 'V01', accent: 'text-cyan', img: imgComfacundi, link: 'https://comfacundi.com.co/',
    description: 'Plataforma integral para una de las cajas de compensación más importantes de Colombia. Incluye gestión de afiliados, servicios de salud y bienestar con una arquitectura escalable.',
    tags: ['React', 'WordPress', 'Desarrollo a la medida'],
  },
  {
    id: 2, name: 'Comfacundi Personas', category: 'Caja de compensación', tech: 'Desarrollo a la medida', code: 'V02', accent: 'text-cyan', img: imgPersonas, link: 'https://eventos.comfacundi.com.co/personas/',
    description: 'Sistema especializado para la gestión de eventos y servicios individuales, enfocado en la experiencia del usuario final y la agilidad en trámites.',
    tags: ['WordPress', 'Cocobrok', 'Bitrix 24', 'Zapier'],
  },
  {
    id: 3, name: 'Comfacundi Empresas', category: 'Caja de compensación', tech: 'Desarrollo a la medida', code: 'V03', accent: 'text-cyan', img: imgEmpresas, link: 'https://eventos.comfacundi.com.co/empresas/',
    description: 'Portal corporativo diseñado para simplificar los procesos administrativos de las empresas afiliadas, automatizando reportes y pagos.',
    tags: ['WordPress', 'Cocobrok', 'Bitrix 24', 'Zapier'],
  },
  {
    id: 4, name: 'Cubyco', category: 'Real Estate', tech: 'Wordpress', code: 'V04', accent: 'text-cyan', img: imgCubyco, link: 'https://cubyco.co/',
    description: 'Inmobiliaria digital moderna con visualización 3D y tours virtuales. Implementación personalizada sobre WordPress para máxima flexibilidad.',
    tags: ['WordPress', '360 Views', 'SEO Optimizado'],
  },
  {
    id: 5, name: 'Trendyphotographic', category: 'Servicios multimedia', tech: 'WordPress / Woocommerce', code: 'V05', accent: 'text-cyan', img: imgTrendyPhotographic, link: 'https://trendyphotographic.com/',
    description: 'E-commerce premium para la venta de servicios fotográficos y descarga de assets digitales. Integración robusta con pasarelas de pago y gestión de clientes.',
    tags: ['WooCommerce', 'Amelia Booking', 'Brand Design'],
  },
  {
    id: 6, name: 'Terrum', category: 'Real Estate', tech: 'WordPress', code: 'V06', accent: 'text-cyan', img: imgTerrum, link: 'https://terrum.constructoracamu.com/',
    description: 'Micrositio de alta conversión para proyectos inmobiliarios específicos, con enfoque en la captura de leads y visualización de planos.',
    tags: ['Elementor', 'Landing Page', 'Analytics'],
  },
  {
    id: 7, name: 'Ariansigroup', category: 'Real Estate', tech: 'WordPress', code: 'V07', accent: 'text-cyan', img: imgAriansiGroup, link: 'https://landing.ariasigroup.com/',
    description: 'Landing page corporativa para un holding inmobiliario internacional, destacando su trayectoria y portafolio de inversiones.',
    tags: ['WordPress', 'Multi-Lenguaje', 'Performance', 'UI/UX'],
  },
  {
    id: 8, name: 'Castilla Real', category: 'Real Estate', tech: 'WordPress', code: 'V08', accent: 'text-cyan', img: imgCastillaReal, link: 'https://castellareservadolanding.constructoraarinsa.com/',
    description: 'Página de preventa para proyecto residencial de lujo, integrando automatización de WhatsApp para el equipo de ventas.',
    tags: ['WordPress', 'Landing Page', 'Optimization'],
  },
  {
    id: 9, name: 'Campestre Miranda', category: 'Hotelería y Turismo', tech: 'WordPress', code: 'V09', accent: 'text-cyan', img: imgCampestreMiranda, link: 'https://www.campestremiranda.com/',
    description: 'Se trata de "Cabaña Campestre Miranda", un lugar de alojamiento en Sabanagrande (Atlántico, Colombia), a unos 30-60 minutos de Barranquilla, enfocado en estadías relajadas en naturaleza con piscina y comodidades, integrando sistema de reservas y galería multimedia de alta calidad.',
    tags: ['Booking System', 'Responsive Design', 'WordPress'],
  },
  {
    id: 10, name: 'Estética Pereira', category: 'Belleza y Estética', tech: 'WordPress', code: 'V10', accent: 'text-cyan', img: imgEsteticaPereira, link: 'https://esteticaenpereira.com/',
    description: 'centro de estética en Pereira (Risaralda, Colombia), que ofrece terapias no invasivas como radiofrecuencia, moldeo corporal y rejuvenecimiento con tecnologías FDA-aprobadas. Plataforma de servicios estéticos con sistema de agendamiento de citas y catálogo de tratamientos especializados.',
    tags: ['Booking System', 'Responsive Design', 'WordPress'],
  },
  {
    id: 11, name: 'Xigua', category: 'Salud y Bienestar', tech: 'WordPress / Woocommerce', code: 'V11', accent: 'text-cyan', img: imgXigua, link: 'https://www.xigua.com.co/',
    description: 'Xigua ofrece talleres y acompañamiento profesional en alimentación consciente, ejercicio físico, manejo de estrés y descanso, tanto para individuos como corporativos.',
    tags: ['E-commerce', 'WordPress', 'Educación'],
  },
  {
    id: 12, name: 'Grifos', category: 'Construcción y equipamiento', tech: 'WordPress', code: 'V12', accent: 'text-cyan', img: imgGrifos, link: 'https://grifos.net/',
    description: 'Grifos Aqua es una empresa colombiana fundada en 1981 en Bucaramanga, líder nacional en fabricación e instalación de hidropiscinas, spas, tinas de hidromasaje, saunas turcos y mobiliario exterior para piscinas.',
    tags: ['Industrial Design', 'Faceted Search', 'Catalog Management'],
  },
  {
    id: 13, name: 'Cavanna', category: 'Real Estate', tech: 'WordPress', code: 'V13', accent: 'text-cyan', img: imgCavana, link: 'https://cavanna.constructoracamu.com/',
    description: 'Es el proyecto "Cavanná" de Calicanto CAMU S.A.S (Constructora CAMU): conjunto cerrado de 4 torres (5 pisos c/u, 140 aptos) en Villa Alejandra II Etapa, vía Puerto Espejo, Armenia (Quindío).',
    tags: ['WordPress', 'Real Estate Marketing', 'High Fidelity'],
  },
  {
    id: 14, name: 'Milán 70', category: 'Real Estate', tech: 'WordPress', code: 'V14', accent: 'text-cyan', img: imgMilan70, link: 'https://milan170.constructoracamu.com/',
    description: 'Portafolio digital de proyecto urbano innovador, mezclando estética minimalista con gran carga informativa técnica.',
    tags: ['Modern Architecture', 'Real Estate Marketing', 'WordPress'],
  },
  {
    id: 15, name: 'Pradera Viva', category: 'Real Estate', tech: 'WordPress', code: 'V15', accent: 'text-cyan', img: imgPraderaViva, link: 'https://pradera-viva.constructoracamu.com/',
    description: 'Es el proyecto "Pradera Viva" de Constructora CAMU, un conjunto cerrado de 3 torres con 288 apartamentos en Dosquebradas (Risaralda, Colombia), sector La Pradera cerca del lago.',
    tags: ['Eco-friendly Tech', 'WordPress', 'Real Estate'],
  },
  {
    id: 16, name: 'club del Asado', category: 'Gastronomía', tech: 'WordPress / Woocommerce', code: 'V16', accent: 'text-cyan', img: imgClubDelAsado, link: 'https://elclubdelasado.com.co/',
    description: '"El Club del Asado", un concepto en Bogotá (Comuna 10, barrio Polo Club) que ofrece cortes de carne selectos, eventos de parrillada y espacios para reuniones familiares o corporativas con ambiente festivo.',
    tags: ['WooCommerce', 'Portal de Miembros', 'Email Marketing'],
  },
]
