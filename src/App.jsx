import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loaded) return

    // Scroll-triggered reveals
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      })
    })

    gsap.utils.toArray('.reveal-left').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      })
    })

    gsap.utils.toArray('.reveal-scale').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [loaded])

  return (
    <>
      <div className="noise" />
      <Cursor />
      {!loaded && <Loader />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
