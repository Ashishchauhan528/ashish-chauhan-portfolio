export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-left">
        © {year} Ashish Chauhan — Built with React + GSAP
      </div>
      <div className="footer-right">
        Designed &amp; Developed by <span>Ashish Chauhan</span>
      </div>
    </footer>
  )
}
