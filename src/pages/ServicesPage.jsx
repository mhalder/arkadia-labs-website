import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import {
  Cloud,
  GitBranch,
  Shield,
  Activity,
  Cog,
  Code2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    title: 'Cloud Architecture & Migration',
    description: 'Expert guidance in designing and implementing cloud-native solutions and migrating existing workloads to the cloud.',
    features: [
      'Multi-cloud architecture design',
      'Cloud migration strategy',
      'Infrastructure as Code (IaC)',
      'Cost optimization',
    ],
    icon: Cloud,
  },
  {
    title: 'DevOps Transformation',
    description: 'Modernize your development and operations with industry-leading DevOps practices and tools.',
    features: [
      'CI/CD pipeline implementation',
      'Container orchestration',
      'Microservices architecture',
      'DevOps culture coaching',
    ],
    icon: GitBranch,
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Ensure your cloud infrastructure meets the highest security standards and compliance requirements.',
    features: [
      'Security architecture review',
      'Compliance automation',
      'Identity & access management',
      'Security monitoring',
    ],
    icon: Shield,
  },
  {
    title: 'Site Reliability Engineering',
    description: 'Build reliable, scalable, and highly available systems with SRE best practices.',
    features: [
      'SLO/SLI implementation',
      'Monitoring & alerting',
      'Incident response',
      'Performance optimization',
    ],
    icon: Activity,
  },
  {
    title: 'Infrastructure Automation',
    description: 'Automate your infrastructure deployment and management using modern tools and practices.',
    features: [
      'Terraform deployment',
      'Ansible automation',
      'GitOps workflows',
      'Configuration management',
    ],
    icon: Cog,
  },
  {
    title: 'Cloud Native Development',
    description: 'Develop and modernize applications using cloud-native technologies and practices.',
    features: [
      'Kubernetes deployment',
      'Serverless architecture',
      'API design',
      'Cloud-native patterns',
    ],
    icon: Code2,
  },
]

function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 pb-16">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive cloud and DevOps solutions tailored to accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                className={`animate-fade-up opacity-0 delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured methodology that ensures successful outcomes for every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Understand your current state and objectives' },
              { step: '02', title: 'Design', desc: 'Architect solutions aligned with your goals' },
              { step: '03', title: 'Implement', desc: 'Build and deploy with best practices' },
              { step: '04', title: 'Optimize', desc: 'Continuously improve and support' },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-border to-border via-primary/50" />
                )}

                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's build something great together
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Ready to discuss how we can help transform your infrastructure? Get in touch today.
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

export default ServicesPage
