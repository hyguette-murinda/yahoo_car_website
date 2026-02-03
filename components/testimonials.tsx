'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Mitchell',
    company: 'Global Electronics Inc.',
    content: 'TransportCo has been instrumental in streamlining our supply chain. Their reliability and professionalism are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    company: 'Fresh Foods Distribution',
    content: 'The refrigerated trucks are perfectly maintained and our products arrive in pristine condition every single time.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    company: 'Retail Solutions Ltd.',
    content: 'Outstanding service! Their real-time tracking and customer support make managing logistics so much easier.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    company: 'International Trade Partners',
    content: 'Excellent handling of our international shipments. Professional team, transparent pricing, and reliable delivery.',
    rating: 5,
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses for their transportation and logistics needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredIndex === index

            return (
              <Card 
                key={index} 
                className={`p-5 md:p-6 flex flex-col transition-all duration-300 cursor-pointer group
                  ${isHovered 
                    ? 'shadow-lg border-primary/50 bg-primary/5 scale-105' 
                    : 'hover:shadow-md hover:border-border/80'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                role="article"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-yellow-400 text-yellow-400 transition duration-300
                        ${isHovered ? 'scale-110' : 'group-hover:scale-105'}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className={`text-foreground mb-4 flex-grow italic text-sm md:text-base leading-relaxed transition duration-300
                  ${isHovered ? 'text-primary/90' : ''}`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className={`font-bold text-foreground text-sm md:text-base transition duration-300
                    ${isHovered ? 'text-primary' : ''}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
