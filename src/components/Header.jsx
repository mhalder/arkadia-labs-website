import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="glass rounded-2xl shadow-lg max-w-6xl mx-auto">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="relative">
                <svg
                  className="w-10 h-10 transition-transform duration-300 group-hover:rotate-6"
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="headerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="[stop-color:hsl(var(--primary))]" />
                      <stop offset="100%" className="[stop-color:hsl(var(--accent))]" />
                    </linearGradient>
                    <linearGradient id="headerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="[stop-color:hsl(var(--accent))]" />
                      <stop offset="100%" className="[stop-color:hsl(var(--primary))]" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="0" width="30" height="30" rx="4" fill="url(#headerGrad1)" opacity="0.7"/>
                  <rect x="10" y="20" width="30" height="30" rx="4" fill="url(#headerGrad2)" opacity="0.85"/>
                  <rect x="25" y="35" width="30" height="30" rx="4" fill="url(#headerGrad1)"/>
                  <line x1="35" y1="30" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" className="text-foreground"/>
                  <line x1="40" y1="50" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" className="text-foreground"/>
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Arkadia Labs
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ))}

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2 rounded-lg hover:bg-secondary/50"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
                )}
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
