const certificates = [
  {
    icon: '📊',
    name: 'Learning Microsoft Power BI',
    issuer: 'Infosys',
    date: 'Dec 2025',
    link: 'https://drive.google.com/file/d/13SfM7n6rPDSNt7szOjYuCXbTB292eK-c/view?usp=sharing',
  },
  {
    icon: '☁️',
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Oct 2025',
    link: 'https://drive.google.com/file/d/1H6glkK17tvzM3nfsxXmNtXNhlsx6E6cH/view?usp=sharing',
  },
  {
    icon: '🌐',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    link: 'https://drive.google.com/file/d/1B9kjdnMJr66jD-mcsJvDxW_KvgbvVvgH/view?usp=sharing',
  },
]

const achievements = [
  {
    num: '100+',
    text: <><strong>Solved 100+ problems</strong> from Striver's A to Z DSA Sheet — strengthening core Data Structures &amp; Algorithms concepts. <span style={{ color: 'var(--text-3)', fontSize: 12 }}>(Jul '25)</span></>,
  },
  {
    num: 'AIR',
    text: <><strong>Secured AIR 1402 in IMU-CET</strong> — demonstrating strong aptitude and competitiveness at national level. <span style={{ color: 'var(--text-3)', fontSize: 12 }}>(Jun '23)</span></>,
  },
  {
    num: 'A',
    text: <><strong>Grade A in LPU Training</strong> — Logic Building, Programming &amp; Data Structures skill-based program. <span style={{ color: 'var(--text-3)', fontSize: 12 }}>(Jun–Jul '25)</span></>,
  },
]

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: '120px 48px' }}>
      <div className="certs-section">
        <div className="section-tag reveal">Recognition</div>
        <h2 className="section-title reveal">
          Certificates &amp; <span style={{ color: 'var(--accent)' }}>Achievements</span>
        </h2>

        <div className="certs-grid">
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--text-3)', textTransform: 'uppercase',
              letterSpacing: '0.1em', marginBottom: 20,
            }}>Certifications</div>
            <div className="cert-list">
              {certificates.map((c, i) => (
                <a href={c.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} key={i}>
                <div className="cert-item reveal" key={i}>
                  <div className="cert-left">
                    <div className="cert-icon">{c.icon}</div>
                    <div>
                      <div className="cert-name">{c.name}</div>
                      <div className="cert-issuer">{c.issuer}</div>
                    </div>
                  </div>
                  <div className="cert-date">{c.date}</div>
                </div>
                </a>
              ))}
            </div>
          </div>

          <div id="achievements">
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--text-3)', textTransform: 'uppercase',
              letterSpacing: '0.1em', marginBottom: 20,
            }}>Achievements</div>
            <div className="achv-list">
              {achievements.map((a, i) => (
                <div className="achv-item reveal" key={i}>
                  <div className="achv-num">{a.num}</div>
                  <div className="achv-text">{a.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
