const skillCategories = [
  {
    icon: '⌨️',
    name: 'Languages',
    skills: ['JavaScript', 'C++', 'Python'],
  },
  {
    icon: '🎨',
    name: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design', 'DOM Manipulation'],
  },
  {
    icon: '⚙️',
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Mongoose ODM'],
  },
  {
    icon: '🛠️',
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm'],
  },
  {
    icon: '📊',
    name: 'Data & Analytics',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Data Cleaning', 'UNDP Datasets'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 48px' }}>
      <div className="skills-section">
        <div className="section-tag reveal">Technical Stack</div>
        <h2 className="section-title reveal">
          Skills &amp; <span style={{ color: 'var(--accent)' }}>Technologies</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category reveal-scale" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span className="skill-tag" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Training */}
        <div className="reveal" style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          padding: '32px 40px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 32,
          alignItems: 'center',
          marginTop: 2,
        }}>
          <div style={{
            width: 48, height: 48,
            background: 'var(--accent-dim)',
            border: '1px solid rgba(200,245,66,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, flexShrink: 0,
          }}>🎓</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--text-3)', textTransform: 'uppercase',
              letterSpacing: '0.08em', marginBottom: 6,
            }}>Training — LPU</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              Logic Building, Programming &amp; Data Structures
            </div>
            <div style={{ color: 'var(--text-2)', fontSize: 14 }}>
              Achieved A Grade · Focused on algorithmic thinking, problem-solving, and core DSA implementation.
            </div>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--accent)', background: 'var(--accent-dim)',
            padding: '6px 14px', whiteSpace: 'nowrap',
          }}>Jun–Jul '25</div>
        </div>
      </div>
    </section>
  )
}
