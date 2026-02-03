'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Truck, Package, Globe, Clock } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Long Distance Transport',
    description: 'Yahoo Car\'s efficient long-distance transportation with dedicated drivers and real-time tracking technology.',
  },
  {
    icon: Package,
    title: 'Freight Shipping',
    description: 'Secure cargo handling with Yahoo Car\'s professional packaging solutions and comprehensive insurance coverage.',
  },
  {
    icon: Globe,
    title: 'Private Transport',
    description: 'Seamless global logistics through Yahoo Car\'s network with customs clearance and documentation support.',
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Yahoo Car\'s express delivery ensures your time-sensitive shipments arrive exactly when needed.',
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:pt-40 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">Yahoo Car Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional transportation and logistics solutions tailored to exceed your expectations with Yahoo Car's expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <Card
                key={index}
                className={`p-5 md:p-6 transition-all duration-300 cursor-pointer group rounded-2xl border-0 shadow-md
                  ${isHovered
                    ? 'shadow-xl border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 scale-105'
                    : 'hover:shadow-lg hover:bg-secondary/30'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                role="button"
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm
                  ${isHovered ? 'bg-gradient-to-br from-primary/20 to-primary/30 scale-110 shadow-md' : 'group-hover:from-primary/15 group-hover:to-primary/25'}`}>
                  <Icon className={`w-6 h-6 text-primary transition-all duration-300
                    ${isHovered ? 'scale-110' : ''}`} />
                </div>
                <h3 className={`text-base md:text-lg font-bold text-foreground mb-2 transition duration-300
                  ${isHovered ? 'text-primary' : ''}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
