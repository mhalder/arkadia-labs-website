import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <svg
                className="w-10 h-10 transition-transform duration-300 group-hover:rotate-6"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                  </linearGradient>
                  <linearGradient id="footerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                  </linearGradient>
                </defs>
                <rect x="20" y="0" width="30" height="30" rx="4" fill="url(#footerGrad1)" opacity="0.7"/>
                <rect x="10" y="20" width="30" height="30" rx="4" fill="url(#footerGrad2)" opacity="0.85"/>
                <rect x="25" y="35" width="30" height="30" rx="4" fill="url(#footerGrad1)"/>
                <line x1="35" y1="30" x2="25" y2="40" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                <line x1="40" y1="50" x2="50" y2="40" stroke="white" strokeWidth="1.5" opacity="0.5"/>
              </svg>
              <span className="font-display text-lg font-bold">Arkadia Labs</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with cloud expertise and DevOps excellence to accelerate digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  Impressum
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  Privacy Policy
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:halderm@arkadia-labs.io"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  halderm@arkadia-labs.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+41417681161"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +41 41 768 11 61
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Address
            </h3>
            <div className="flex items-start gap-2 text-sm text-foreground/80">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p>Blegistrasse 11B</p>
                <p>6341 Baar</p>
                <p>Switzerland</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Arkadia Labs GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Based in Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
