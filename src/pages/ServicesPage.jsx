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
    description: 'Designing cloud infrastructure or moving what you have to AWS, Azure, or GCP. I figure out the right setup for your workload and budget.',
    features: [
      'Multi-cloud architecture design',
      'Migration planning & execution',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Cost optimization',
    ],
    icon: Cloud,
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Getting your team from "it works on my machine" to reliable, automated deployments.',
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'GitOps workflows',
      'Team enablement & coaching',
    ],
    icon: GitBranch,
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Making sure your cloud setup is locked down and audit-ready. Especially relevant for regulated industries.',
    features: [
      'Security architecture review',
      'Compliance automation',
      'Identity & access management',
      'Security monitoring & alerting',
    ],
    icon: Shield,
  },
  {
    title: 'Site Reliability Engineering',
    description: 'Keeping your systems up and your team sane. SLOs, monitoring, incident response — the stuff that matters at 3 AM.',
    features: [
      'SLO/SLI definition & tracking',
      'Monitoring & alerting setup',
      'Incident response processes',
      'Performance optimization',
    ],
    icon: Activity,
  },
  {
    title: 'Infrastructure Automation',
    description: 'If you\'re still clicking through a console to deploy, let\'s fix that. Everything as code, everything repeatable.',
    features: [
      'Terraform & OpenTofu',
      'Ansible automation',
      'GitOps with ArgoCD / Flux',
      'Configuration management',
    ],
    icon: Cog,
  },
  {
    title: 'Cloud Native Development',
    description: 'Building applications that are designed for the cloud from day one — containers, Kubernetes, serverless.',
    features: [
      'Kubernetes deployment & operations',
      'Serverless architecture',
      'API design & integration',
      'Platform engineering',
    ],
    icon: Code2,
  },
]

function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 pb-16">
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Here's what I can help with. Every engagement is different — reach out and we'll figure out what makes sense for your situation.
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

      {/* CTA Section */}
      <section className="relative px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 overflow-hidden">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need help with any of this?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Tell me what you're dealing with. I'll be honest about whether I'm the right fit.
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

export default ServicesPage
