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
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                      <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M32 2 L58 60 H46 L40 46 H24 L18 60 H6 Z M24 46 Q32 16, 40 46 Z"
                    fill="url(#headerGrad)"
                    fillRule="evenodd"
                  />
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
