import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <rect x="20" y="0" width="30" height="30" rx="4" fill="url(#heroGrad1)" opacity="0.7"/>
            <rect x="10" y="20" width="30" height="30" rx="4" fill="url(#heroGrad2)" opacity="0.85"/>
            <rect x="25" y="35" width="30" height="30" rx="4" fill="url(#heroGrad1)"/>
            <line x1="35" y1="30" x2="25" y2="40" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
            <line x1="40" y1="50" x2="50" y2="40" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
          </svg>
        </div>
        <h1>Arkadia Labs GmbH</h1>
        <p className="hero-tagline">
          Empowering businesses through modern cloud solutions and DevOps excellence
        </p>
      </div>
    </section>
  )
}

export default Hero
