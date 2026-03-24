import { useState } from 'react'
import prescriptoImg from '../assets/prescripto.png'
import obysImg from '../assets/obys.png'
import hdiImg from '../assets/hdi.png'
import hr_analyticsImg from '../assets/hr_analytics.png'
import chandni_chowkImg from '../assets/chandni_chowk.png'

const projects = [
  {
    num: '01',
    name: 'Prescripto',
    subtitle: 'Doctor Appointment Booking Platform',
    desc: 'A full-stack doctor appointment booking platform enabling users to browse doctors, view profiles, and schedule appointments. Includes separate panels for users, doctors, and admins with secure JWT authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    tags: ['Full Stack', 'Featured'],
    github: 'https://github.com/Ashishchauhan528/Prescripto',
    date: 'Mar 2026',
    images: [prescriptoImg],
    color: '#c8f542',
  },
  {
    num: '02',
    name: 'OBYS Agency Clone',
    subtitle: 'Pixel-Perfect Frontend Recreation',
    desc: 'A high-fidelity clone of the award-winning OBYS Agency website featuring advanced CSS animations, smooth scrolling effects, and interactive DOM manipulations replicating real-world frontend behavior.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Locomotive Scroll'],
    tags: ['Frontend', 'Animation'],
    github: 'https://github.com/Ashishchauhan528/Obys-Agency-Clone-Project',
    date: 'Feb 2026',
    images: [obysImg],
    color: '#4d9fff',
  },
  {
    num: '03',
    name: 'HDI & Inequality Metrics Explorer',
    subtitle: 'Global Human Development Power BI Dashboard',
    desc: 'An interactive multi-page Power BI dashboard analyzing global development using HDI, GDI, GII, MPI, and PHDI datasets from UNDP covering 190+ countries. Features end-to-end data cleaning, advanced DAX calculations, gender inequality analysis, multidimensional poverty mapping, and planetary pressure metrics.',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'UNDP Data', 'Data Cleaning'],
    tags: ['Data Analytics', 'Power BI', 'Featured'],
    github: 'https://github.com/Ashishchauhan528/Human-Development-Index-HDI-Inequality-Metrics-Explorer',
    date: 'Nov 2025',
    images: [hdiImg],
    color: '#f5e642',
  },
  {
    num: '04',
    name: 'HR Analytics Dashboard',
    subtitle: 'Workforce Insights with Power BI',
    desc: 'A comprehensive HR analytics solution enabling organizations to visualize workforce data, track attrition by age, salary, education and job role, with dynamic filters across HR, R&D and Sales departments.',
    tech: ['Power BI', 'DAX', 'Data Visualization', 'HR Datasets'],
    tags: ['Data Analytics'],
    github: 'https://github.com/Ashishchauhan528/HR_Analytics',
    date: '2025',
    images: [hr_analyticsImg],
    color: '#ff6b6b',
  },
  {
    num: '05',
    name: 'Air Quality Monitoring — Chandni Chowk',
    subtitle: 'Environmental Analytics Dashboard',
    desc: 'An environmental monitoring dashboard tracking air quality metrics (PM2.5, PM10, NO2, SO2, CO) over time in Chandni Chowk, Delhi. Features pollutant trend analysis, WHO safe limit comparisons, and geo-mapped data visualization.',
    tech: ['Power BI', 'DAX', 'Geo Mapping', 'AQI Data'],
    tags: ['Data Analytics', 'Environmental'],
    github: 'https://github.com/Ashishchauhan528',
    date: 'Oct 2025',
    images: [chandni_chowkImg],
    color: '#4df5c8',
  },
]

function ImageCarousel({ images, name }) {
  const [active, setActive] = useState(0)
  if (!images || images.length === 0) return null

  return (
    <div className="proj-carousel">
      <div className="proj-carousel-img-wrap">
        <img
          src={images[active]}
          alt={`${name} screenshot ${active + 1}`}
          className="proj-carousel-img"
        />
      </div>
      {images.length > 1 && (
        <div className="proj-carousel-controls">
          <div className="proj-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`proj-carousel-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`View screenshot ${i + 1}`}
              />
            ))}
          </div>
          <div className="proj-carousel-count">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-tag reveal">Portfolio</div>
          <h2 className="section-title reveal" style={{ marginBottom: 0 }}>
            Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
          </h2>
        </div>
        <a
          href="https://github.com/Ashishchauhan528"
          target="_blank"
          rel="noreferrer"
          className="btn-outline reveal"
        >
          All Repos &rarr;
        </a>
      </div>

      <div className="projects-cards">
        {projects.map((p, i) => (
          <div
            className="proj-card reveal"
            key={i}
            style={{ '--proj-color': p.color }}
          >
            <div className="proj-card-inner">
              <div className="proj-info">
                <div className="proj-header-row">
                  <span className="proj-num">{p.num}</span>
                  <div className="proj-tags">
                    {p.tags.map((t, j) => (
                      <span className={`project-tag ${t === 'Featured' ? 'featured' : ''}`} key={j}>{t}</span>
                    ))}
                    <span className="proj-date">{p.date}</span>
                  </div>
                </div>

                <h3 className="proj-name">{p.name}</h3>
                <div className="proj-subtitle">{p.subtitle}</div>
                <p className="proj-desc">{p.desc}</p>

                <div className="project-tech" style={{ marginBottom: 24 }}>
                  {p.tech.map((t, j) => <span className="tech-pill" key={j}>{t}</span>)}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-github-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>

              {p.images && p.images.length > 0 ? (
                <ImageCarousel images={p.images} name={p.name} />
              ) : (
                <div className="proj-no-img">
                  <div className="proj-no-img-code">
                    <div style={{ color: 'var(--proj-color)', marginBottom: 8 }}>{'// ' + p.name}</div>
                    <div style={{ color: 'var(--text-3)' }}>{'const app = {'}</div>
                    {p.tech.slice(0, 4).map((t, j) => (
                      <div key={j} style={{ color: 'var(--text-2)', paddingLeft: 16 }}>
                        <span style={{ color: 'var(--proj-color)' }}>{t.toLowerCase().replace(/[\s.]/g, '_')}</span>: true,
                      </div>
                    ))}
                    <div style={{ color: 'var(--text-3)' }}>{'}'}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="proj-accent-bar" />
          </div>
        ))}
      </div>
    </section>
  )
}
