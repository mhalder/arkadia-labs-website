import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function ServiceCard({ title, description, features, icon: Icon, className }) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
        "card-gradient",
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-40 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl" />
      </div>

      <CardHeader className="relative">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <CardTitle className="transition-colors duration-200 group-hover:text-primary">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-base mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {features && features.length > 0 && (
        <CardContent className="relative">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="group-hover:text-foreground transition-colors duration-200">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}

export default ServiceCard
