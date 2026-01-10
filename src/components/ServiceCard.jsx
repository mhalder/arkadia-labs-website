import './ServiceCard.css'

function ServiceCard({ title, description, features }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      {description && <p className="service-description">{description}</p>}
      {features && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
