import { Link } from 'react-router-dom'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Cloud, GitBranch, Shield, ArrowRight } from 'lucide-react'

const homeServices = [
  {
    title: 'Cloud Architecture',
    description: 'AWS, Azure, or GCP — I design infrastructure from scratch or migrate what you already have.',
    icon: Cloud,
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, infrastructure as code, containers. The plumbing that lets your team ship faster.',
    icon: GitBranch,
  },
  {
    title: 'Security & Compliance',
    description: 'Locking down your cloud and making sure it passes audits — especially for regulated industries.',
    icon: Shield,
  },
]

function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Services Preview Section */}
      <section className="relative py-24 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cloud infrastructure, DevOps, and security — from planning to production.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={`animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/services">
                See the Full List
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm Martin, and I run Arkadia Labs out of Baar, Switzerland. I've spent years building and fixing cloud infrastructure for companies that need things done right — not just done fast.
              </p>
              <div className="space-y-4">
                {[
                  'AWS, Azure, and GCP — not married to any one provider',
                  'Terraform, Kubernetes, GitOps — the tools I use daily',
                  'I build things, then I make sure your team can run them',
                  'Clear communication, no jargon walls',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Decorative */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                  <svg
                    className="w-48 h-48 animate-float"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="decorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 2 L58 60 H46 L40 46 H24 L18 60 H6 Z M24 46 Q32 16, 40 46 Z"
                      fill="url(#decorGrad)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 overflow-hidden">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Drop me a line and tell me what you're working on. No sales pitch, just a conversation.
              </p>
              <Button asChild variant="glow" size="lg" className="group">
                <a href="mailto:halderm@arkadia-labs.io">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
