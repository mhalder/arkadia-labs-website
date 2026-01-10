import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Arkadia Labs GmbH</h3>
            <p>
              Empowering businesses with cloud expertise and DevOps excellence to accelerate digital transformation.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:halderm@arkadia-labs.io">halderm@arkadia-labs.io</a></p>
            <p>Phone: <a href="tel:+41417681161">+41 41 768 11 61</a></p>
          </div>

          <div className="footer-section">
            <h3>Address</h3>
            <p>Blegistrasse 11B</p>
            <p>6341 Baar</p>
            <p>Switzerland</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Arkadia Labs GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
