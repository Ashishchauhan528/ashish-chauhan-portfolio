import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.0 })

    tl.fromTo('.hero-eyebrow',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.hero-title .word',
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
      '-=0.3'
    )
    .fromTo('.hero-desc',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-actions',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.hero-stats',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.hero-avatar-wrap',
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.profile-badge',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2'
    )

    gsap.to('.hero-avatar-wrap', {
      y: -12,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 3.5,
    })

  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-line" />

      <div className="hero-left" ref={heroRef}>
        <div className="hero-eyebrow" style={{ opacity: 0 }}>
          Data Science & Full Stack Developer
        </div>

        <h1 className="hero-title">
          <span className="line"><span className="word">Building</span></span>
          <span className="line"><span className="word accent">Digital</span></span>
          <span className="line"><span className="word">Experiences</span></span>
        </h1>

        <p className="hero-desc" style={{ opacity: 0 }}>
          I'm <strong>Ashish Chauhan</strong>, a third-year CSE student at LPU passionate about Data Science, Power BI dashboards, and full-stack web development — from pixel-perfect UIs to scalable backend systems and data dashboards.
        </p>

        <div className="hero-actions" style={{ opacity: 0 }}>
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span>View Projects</span>
            <span>→</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=chauhanashish0831@gmail.com" target="_blank" className="btn-outline">
            Get In Touch
          </a>
          <a href="/resume.pdf" download="Ashish_Chauhan_Resume.pdf" className="btn-outline">Download Resume ↓
          </a>
        </div>

        <div className="hero-stats" style={{ opacity: 0 }}>
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100+</div>
            <div className="stat-label">DSA Problems</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">7.08</div>
            <div className="stat-label">CGPA at LPU</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-avatar-wrap" style={{ opacity: 0 }}>
          {/* Stylized initials avatar */}
          <div className="profile-frame">
            <div className="avatar-inner">
              <div className="avatar-initials">AC</div>
              <div className="avatar-ring ring1" />
              <div className="avatar-ring ring2" />
              <div className="avatar-dots">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="avatar-dot" style={{
                    transform: `rotate(${i * 45}deg) translateY(-160px)`
                  }} />
                ))}
              </div>
              <div className="avatar-skills-list">
              <div className="avatar-skills-list">
              <span style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)' }}>React.js</span>
              <span style={{ position: 'absolute', top: '25%', right: '8%' }}>Node.js</span>
              <span style={{ position: 'absolute', top: '25%', left: '8%' }}>MongoDB</span>
              <span style={{ position: 'absolute', bottom: '30%', right: '8%' }}>Power BI</span>
              <span style={{ position: 'absolute', bottom: '30%', left: '8%' }}>Python</span>
              <span style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)' }}>Express.js</span>
</div>
</div>
            </div>
            <div className="profile-badge">
              <div className="profile-badge-title">Currently</div>
              <div className="profile-badge-val">Open to Work</div>
            </div>
            <div className="profile-tag">CSE @ LPU</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" style={{ opacity: 0 }}>
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
