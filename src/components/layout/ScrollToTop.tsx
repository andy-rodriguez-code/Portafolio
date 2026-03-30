import { useState, useEffect } from 'react'; import { useNavigate } from 'react-router-dom'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false); const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 500)
  }

  const scrollToTop = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 size-12 flex items-center justify-center bg-bg-surface/80 backdrop-blur-md border-[0.5px] border-cyan/70 text-cyan transition-all duration-300 hover:bg-cyan hover:text-black cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.15)] group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <svg
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
