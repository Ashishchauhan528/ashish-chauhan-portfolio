const items = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js',
  'Full Stack Dev', 'JavaScript', 'Power BI', 'MySQL',
  'REST APIs', 'Git & GitHub', 'Python', 'C++',
  'React.js', 'Node.js', 'MongoDB', 'Express.js',
  'Full Stack Dev', 'JavaScript', 'Power BI', 'MySQL',
  'REST APIs', 'Git & GitHub', 'Python', 'C++',
]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <div className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
