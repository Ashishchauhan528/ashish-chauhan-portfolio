const contacts = [
  {
    label: 'Email',
    val: 'chauhanashish0831@gmail.com',
    href: 'mailto:chauhanashish0831@gmail.com',
  },
  {
    label: 'Mobile',
    val: '+91 85809 16978',
    href: 'tel:+918580916978',
  },
  {
    label: 'GitHub',
    val: 'Ashishchauhan528',
    href: 'https://github.com/Ashishchauhan528',
  },
  {
    label: 'LinkedIn',
    val: 'ashishchauhan132',
    href: 'https://www.linkedin.com/in/ashishchauhan132',
  },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="section-tag reveal">Get In Touch</div>

        <h2 className="contact-big reveal">
          Let's <span className="accent">Work</span><br />
          Together<span className="accent">.</span>
        </h2>

        <div className="contact-grid">
          {contacts.map((c, i) => (
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className="contact-card reveal"
              key={i}
            >
              <div>
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-val">{c.val}</div>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
