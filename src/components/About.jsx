export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="section-tag reveal">About Me</div>
          <h2 className="section-title reveal" style={{ marginBottom: 24 }}>
            The Story<br />Behind the <span style={{ color: 'var(--accent)' }}>Code</span>
          </h2>

          <p className="about-body reveal">
            I'm a <strong>third-year Computer Science Engineering student</strong> at Lovely Professional University, 
            building full-stack applications that solve real problems. I enjoy every layer of the stack — from 
            crafting smooth React UIs to designing robust REST APIs and managing MongoDB databases.
          </p>

          <p className="about-body reveal">
            Beyond web development, I've explored <strong>data analytics</strong> with Power BI, solving 
            complex data storytelling challenges on real-world UNDP datasets. I believe in writing clean, 
            maintainable code and continuously sharpening problem-solving skills through DSA practice.
          </p>

          <div className="about-highlight reveal">
            ✦ &nbsp; Available for internships, freelance projects, and full-time roles after graduation.
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="mailto:chauhanashish0831@gmail.com"
              className="btn-primary"
            >
              <span>Let's Talk</span>
              <span>→</span>
            </a>
            <a
              href="https://github.com/Ashishchauhan528"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="section-tag reveal">Education</div>
          <div className="edu-items">
            <div className="edu-item reveal">
              <div className="edu-year">Aug 2023 — Present</div>
              <div className="edu-degree">B.Tech — Computer Science & Engineering</div>
              <div className="edu-institution">Lovely Professional University, Phagwara, Punjab</div>
              <div className="edu-grade">CGPA: 7.08</div>
            </div>
            <div className="edu-item reveal">
              <div className="edu-year">Apr 2021 — Mar 2022</div>
              <div className="edu-degree">Intermediate (12th)</div>
              <div className="edu-institution">D.A.V. Sr. Sec. Public School, Una, H.P.</div>
              <div className="edu-grade">79.2%</div>
            </div>
            <div className="edu-item reveal">
              <div className="edu-year">Apr 2019 — Mar 2020</div>
              <div className="edu-degree">Matriculation (10th)</div>
              <div className="edu-institution">D.A.V. Sr. Sec. Public School, Una, H.P.</div>
              <div className="edu-grade">76.8%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
