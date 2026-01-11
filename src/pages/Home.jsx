import { Link } from 'react-router-dom'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Cloud, GitBranch, Shield, ArrowRight } from 'lucide-react'

const homeServices = [
  {
    title: 'Cloud Architecture',
    description: 'Design scalable and secure cloud infrastructure on AWS, Azure, and GCP',
    icon: Cloud,
  },
  {
    title: 'DevOps Automation',
    description: 'Implement CI/CD pipelines and automate infrastructure deployment',
    icon: GitBranch,
  },
  {
    title: 'Cloud Security',
    description: 'Implement best practices for secure cloud operations and compliance',
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
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We specialize in transforming your infrastructure with modern cloud and DevOps practices
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
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Why Arkadia Labs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Swiss precision meets cloud innovation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Based in Baar, Switzerland, we bring the renowned Swiss commitment to quality and precision to every cloud transformation project. Our team of experts combines deep technical knowledge with a pragmatic approach to deliver solutions that work.
              </p>
              <div className="space-y-4">
                {[
                  'Multi-cloud expertise across AWS, Azure, and GCP',
                  'End-to-end DevOps transformation',
                  'Security-first approach with compliance automation',
                  'Dedicated support and knowledge transfer',
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
                    viewBox="0 0 70 70"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="decorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                      </linearGradient>
                      <linearGradient id="decorGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'hsl(262 83% 68%)' }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(199 89% 60%)' }} />
                      </linearGradient>
                    </defs>
                    <rect x="20" y="0" width="30" height="30" rx="6" fill="url(#decorGrad1)" opacity="0.7"/>
                    <rect x="10" y="20" width="30" height="30" rx="6" fill="url(#decorGrad2)" opacity="0.85"/>
                    <rect x="25" y="35" width="30" height="30" rx="6" fill="url(#decorGrad1)"/>
                    <line x1="35" y1="30" x2="25" y2="40" stroke="white" strokeWidth="2" opacity="0.5"/>
                    <line x1="40" y1="50" x2="50" y2="40" stroke="white" strokeWidth="2" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 -rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your infrastructure?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Let's discuss how we can help accelerate your cloud journey with modern DevOps practices.
              </p>
              <Button asChild variant="glow" size="lg" className="group">
                <a href="mailto:halderm@arkadia-labs.io">
                  Start a Conversation
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
