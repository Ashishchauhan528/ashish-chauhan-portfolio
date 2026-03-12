import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader() {
  const loaderRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let n = 0
    const interval = setInterval(() => {
      n += Math.floor(Math.random() * 15) + 5
      if (n >= 100) { n = 100; clearInterval(interval) }
      setCount(n)
    }, 80)

    gsap.to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 1.8,
    })

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-text">
        <span>AC</span>
        <span style={{ color: 'var(--accent)' }}>.</span>
      </div>
      <div className="loader-bar" />
      <div className="loader-count">{count}%</div>
    </div>
  )
}
