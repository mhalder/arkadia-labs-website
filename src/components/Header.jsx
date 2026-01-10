import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="headerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <rect x="20" y="0" width="30" height="30" rx="4" fill="url(#headerGrad1)" opacity="0.7"/>
            <rect x="10" y="20" width="30" height="30" rx="4" fill="url(#headerGrad2)" opacity="0.85"/>
            <rect x="25" y="35" width="30" height="30" rx="4" fill="url(#headerGrad1)"/>
            <line x1="35" y1="30" x2="25" y2="40" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
            <line x1="40" y1="50" x2="50" y2="40" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
          </svg>
          <span>Arkadia Labs</span>
        </Link>

        <nav className="nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            Services
          </Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
