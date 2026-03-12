import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Nav() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.1 }
    )

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav ref={navRef} className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('#hero') }}>
        Ashish<span>.</span>
      </a>

      <ul className="nav-links">
        {[['#about', 'About'], ['#skills', 'Skills'], ['#projects', 'Projects'], ['#contact', 'Contact']].map(([href, label]) => (
          <li key={href}>
            <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a>
          </li>
        ))}
      </ul>

      <a
        href="https://mail.google.com/mail/?view=cm&to=chauhanashish0831@gmail.com"
        target="_blank"
        className="nav-cta"
        style={{ display: menuOpen ? 'none' : undefined }}
      >
        Hire Me
      </a>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40,
        }}>
          {[['#about', 'About'], ['#skills', 'Skills'], ['#projects', 'Projects'], ['#contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href}
              onClick={e => { e.preventDefault(); scrollTo(href) }}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 800,
                color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.03em',
              }}
            >{label}</a>
          ))}
          <a href="https://mail.google.com/mail/?view=cm&to=chauhanashish0831@gmail.com" target="_blank" className="btn-primary" style={{ marginTop: 20 }}>
            <span>Hire Me</span>
          </a>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: 20, right: 20, background: 'none', border: 'none',
            color: 'var(--text)', fontSize: 32, cursor: 'pointer',
          }}>✕</button>
        </div>
      )}
    </nav>
  )
}
