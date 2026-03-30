import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Technologies from './components/sections/Technologies'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
