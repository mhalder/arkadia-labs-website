import ServiceCard from '../components/ServiceCard'
import './ServicesPage.css'

const services = [
  {
    title: 'Cloud Architecture & Migration',
    description: 'Expert guidance in designing and implementing cloud-native solutions and migrating existing workloads to the cloud.',
    features: [
      'Multi-cloud architecture design',
      'Cloud migration strategy',
      'Infrastructure as Code (IaC)',
      'Cost optimization'
    ]
  },
  {
    title: 'DevOps Transformation',
    description: 'Modernize your development and operations with industry-leading DevOps practices and tools.',
    features: [
      'CI/CD pipeline implementation',
      'Container orchestration',
      'Microservices architecture',
      'DevOps culture coaching'
    ]
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Ensure your cloud infrastructure meets the highest security standards and compliance requirements.',
    features: [
      'Security architecture review',
      'Compliance automation',
      'Identity & access management',
      'Security monitoring'
    ]
  },
  {
    title: 'Site Reliability Engineering',
    description: 'Build reliable, scalable, and highly available systems with SRE best practices.',
    features: [
      'SLO/SLI implementation',
      'Monitoring & alerting',
      'Incident response',
      'Performance optimization'
    ]
  },
  {
    title: 'Infrastructure Automation',
    description: 'Automate your infrastructure deployment and management using modern tools and practices.',
    features: [
      'Terraform deployment',
      'Ansible automation',
      'GitOps workflows',
      'Configuration management'
    ]
  },
  {
    title: 'Cloud Native Development',
    description: 'Develop and modernize applications using cloud-native technologies and practices.',
    features: [
      'Kubernetes deployment',
      'Serverless architecture',
      'API design',
      'Cloud-native patterns'
    ]
  }
]

function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
