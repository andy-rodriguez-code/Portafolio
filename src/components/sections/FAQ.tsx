import { Reveal } from '../ui/Reveal'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué sectores atiende Andy Code Tech?',
    answer: 'Tengo experiencia comprobada en economía (cajas de compensación como Comfacundi), educación y bienestar (Xigua, plataformas e-learning), turismo y viajes (Campestre Miranda en el Atlántico), gastronomía (El Club del Asado, Bogotá), inmobiliaria (Cubyco, Constructora CAMU con 5+ proyectos), belleza, salud e industria.',
  },
  {
    question: '¿Qué es AEO/GEO y por qué lo necesito en mi empresa en Colombia?',
    answer: 'AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization) son las estrategias para aparecer en las respuestas de ChatGPT, Perplexity y Gemini. Cuando tus clientes buscan hoteles en Colombia, cursos online, restaurantes en Bogotá o proyectos inmobiliarios — si no estás en las respuestas de IA, no existís. Yo posiciono tu marca directamente ahí.',
  },
  {
    question: '¿Cuánto cuesta una página web profesional en Colombia?',
    answer: 'Landing pages de alto rendimiento desde 800 USD, sitios corporativos en WordPress desde 1.500 USD, e-commerce WooCommerce completo desde 2.500 USD. Todos incluyen SEO técnico inicial, diseño responsive mobile-first y capacitación de uso.',
  },
  {
    question: '¿Hacen sitios web para hoteles, restaurantes o proyectos de turismo y viajes?',
    answer: 'Sí. Tengo proyectos reales: Campestre Miranda (cabaña con reservas online, Sabanagrande-Atlántico) y El Club del Asado (restaurante gourmet con membresías en Bogotá). Desarrollo con sistemas de reservas, galerías multimedia optimizadas y SEO para búsquedas de viajes en Colombia.',
  },
  {
    question: '¿Pueden crear plataformas educativas y e-learning?',
    answer: 'Sí. Desarrollamos plataformas de educación online con WordPress + LMS, venta de cursos con WooCommerce, sistemas de membresías y automatización de matrículas con N8n y Bitrix24. Caso real: Xigua, plataforma de bienestar educativo para individuos y empresas.',
  },
  {
    question: '¿En cuánto tiempo entregan un sitio web?',
    answer: 'Landing page: 5-7 días hábiles. Sitio corporativo WordPress: 15-25 días. E-commerce WooCommerce completo: 25-40 días. Cada entrega incluye optimización SEO técnica, integración de analytics y soporte post-lanzamiento.',
  },
  {
    question: '¿Automatizan procesos para empresas de turismo y economía?',
    answer: 'Sí. Implementamos flujos automáticos de WhatsApp con Manychat, CRM con Kommo y Bitrix24, y bots para atención. Esto aplica para agencias de viajes, hoteles, cajas de compensación, restaurantes y cualquier empresa que quiera automatizar ventas, reservas y seguimiento de clientes.',
  },
]

export default function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      aria-label="Preguntas frecuentes sobre desarrollo web, SEO, turismo, educación y economía digital en Colombia"
      className="py-20 md:py-32 px-8 bg-bg-base"
    >
      <div className="max-w-[900px] mx-auto">
        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-cyan mb-4 block">
              Todo lo que necesitás saber
            </span>
            <h2
              className="font-headline uppercase tracking-tighter leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}
            >
              Preguntas
              <br />
              <span className="neon-text italic">Frecuentes</span>
            </h2>
            <p className="font-body text-base text-muted mt-4 max-w-[500px] mx-auto leading-relaxed">
              Desarrollo web, SEO, economía digital, educación online, turismo, gastronomía — respondemos todo.
            </p>
          </div>
        </Reveal>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <FAQItem {...faq} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index }: FAQItem & { index: number }) {
  return (
    <details
      className="group border-b border-border/30 py-6 cursor-pointer"
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary
        className="flex items-center justify-between gap-4 list-none font-headline text-sm md:text-base lg:text-lg font-bold text-text transition-colors duration-300 group-open:text-cyan"
        itemProp="name"
      >
        <span>
          <span className="font-mono text-[0.6rem] text-muted mr-4 tracking-[0.1em]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {question}
        </span>
        <svg
          className="size-5 text-cyan flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </summary>
      <div
        className="mt-4 font-body text-base text-muted leading-relaxed max-w-[780px] pl-10 text-justify"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <span itemProp="text">{answer}</span>
      </div>
    </details>
  )
}
