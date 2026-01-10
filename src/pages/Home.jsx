import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

const homeServices = [
  {
    title: 'Cloud Architecture',
    description: 'Design scalable and secure cloud infrastructure on AWS, Azure, and GCP'
  },
  {
    title: 'DevOps Automation',
    description: 'Implement CI/CD pipelines and automate infrastructure deployment'
  },
  {
    title: 'Cloud Security',
    description: 'Implement best practices for secure cloud operations and compliance'
  }
]

function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="home-services">
        <div className="services-grid-home">
          {homeServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
