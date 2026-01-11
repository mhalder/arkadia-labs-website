import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Geometric Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />

      {/* Geometric Accents */}
      <div className="absolute top-32 right-20 w-20 h-20 border border-primary/30 rotate-45 opacity-60" />
      <div className="absolute bottom-40 left-16 w-16 h-16 border border-accent/30 rotate-12 opacity-60" />
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary/20 rotate-45" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up opacity-0 delay-100">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Swiss Cloud Excellence</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-up opacity-0 delay-200">
          <div className="relative">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 animate-float"
              viewBox="0 0 70 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                </linearGradient>
                <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
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
                <rect x="20" y="0" width="30" height="30" rx="6" fill="url(#heroGrad1)" opacity="0.7"/>
                <rect x="10" y="20" width="30" height="30" rx="6" fill="url(#heroGrad2)" opacity="0.85"/>
                <rect x="25" y="35" width="30" height="30" rx="6" fill="url(#heroGrad1)"/>
              </g>
              <line x1="35" y1="30" x2="25" y2="40" stroke="white" strokeWidth="2" opacity="0.5"/>
              <line x1="40" y1="50" x2="50" y2="40" stroke="white" strokeWidth="2" opacity="0.5"/>
            </svg>
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl scale-150" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 delay-300">
          <span className="block text-foreground">Arkadia Labs</span>
          <span className="block mt-2 gradient-text">GmbH</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-up opacity-0 delay-400">
          Empowering businesses through modern cloud solutions and{' '}
          <span className="text-foreground font-medium">DevOps excellence</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-500">
          <Button asChild variant="glow" size="lg" className="group">
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:halderm@arkadia-labs.io">
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up opacity-0 delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold font-display text-primary">6+</div>
            <div className="text-sm text-muted-foreground mt-1">Core Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-display text-primary">Swiss</div>
            <div className="text-sm text-muted-foreground mt-1">Precision</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-display text-primary">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Support</div>
          </div>
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
