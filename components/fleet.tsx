'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'all', label: 'All' },
  // { id: 'short', label: 'Short trucks' },
  { id: 'prime', label: 'Prime trucks' },
  { id: 'vans', label: 'Vans' },
  // { id: 'big', label: 'Big load trucks' },
]

const vehicles = [

  {
    id: 'prime-1',
    category: 'prime',
    image: '/car_1.jpeg',
  },

  {
    id: 'prime-2',
    category: 'prime',
    image: '/car_2.jpeg',
  },
  {
    id: 'vans-1',
    category: 'vans',
    image: '/car_3.jpeg',
  },
  {
    id: 'big-2',
    category: 'big',
    image: '/images/screenshot-202026-01-23-20at-2013.png',
  },
  {
    id: 'short-2',
    category: 'short',
    image: '/images/screenshot-202026-01-23-20at-2013.png',
  },
  {
    id: 'vans-2',
    category: 'vans',
    image: '/images/screenshot-202026-01-23-20at-2013.png',
  },

]

export function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory)

  return (
    <section id="fleet" className="py-16 md:pt-40 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">Vehicle Fleet</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of modern transport vehicles
          </p>
        </div>

        {/* Filter Tabs - Scrollable on mobile */}
        <div className="mb-10 md:mb-12">
          <div className="flex gap-2 md:gap-3 justify-center flex-wrap md:flex-nowrap border-b border-border pb-4 md:pb-6 overflow-x-auto -mx-4 px-4">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 md:px-6 py-2 font-medium transition whitespace-nowrap text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="aspect-[3/2] bg-muted rounded-lg overflow-hidden group cursor-pointer active:scale-95 transition"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log('Vehicle selected:', vehicle.id)
                }
              }}
            >
              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={`Vehicle ${vehicle.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              {/* Hover overlay on desktop */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 hidden md:block" />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No vehicles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
