import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up opacity-0 delay-100">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Cloud & DevOps Consulting — Baar, Switzerland</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-up opacity-0 delay-200">
          <div className="relative">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 animate-float"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#glow)">
                <path
                  d="M32 2 L58 60 H46 L40 46 H24 L18 60 H6 Z M24 46 Q32 16, 40 46 Z"
                  fill="url(#heroGrad)"
                  fillRule="evenodd"
                />
              </g>
            </svg>
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl scale-150" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 delay-300">
          <span className="block text-foreground">Arkadia Labs</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-up opacity-0 delay-400">
          I help companies build and run{' '}
          <span className="text-foreground font-medium">cloud infrastructure</span>{' '}
          that actually works.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-500">
          <Button asChild variant="glow" size="lg" className="group">
            <Link to="/services">
              What I Do
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:halderm@arkadia-labs.io">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
