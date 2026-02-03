// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const parkVehicles = [
//   {
//     id: 1,
//     category: 'Short trucks',
//     image: '/images/screenshot-202026-01-23-20at-2013.png',
//   },
//   {
//     id: 2,
//     category: 'Prime trucks',
//     image: '/images/screenshot-202026-01-23-20at-2013.png',
//   },
//   {
//     id: 3,
//     category: 'Big load trucks',
//     image: '/images/screenshot-202026-01-23-20at-2013.png',
//   },
// ]

// export function VehiclePark() {
//   const [current, setCurrent] = useState(0)

//   const next = () => {
//     setCurrent((current + 1) % parkVehicles.length)
//   }

//   const prev = () => {
//     setCurrent((current - 1 + parkVehicles.length) % parkVehicles.length)
//   }

//   const handleDotClick = (index: number) => {
//     setCurrent(index)
//   }

//   return (
//     <section id="vehicle-park" className="py-16 md:py-20 bg-foreground text-background">
//       <div className="container mx-auto px-4">
//         {/* Header with Navigation */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">VEHICLE PARK</h2>
//           <div className="flex gap-2">
//             <button
//               onClick={prev}
//               className="p-2 md:p-3 hover:bg-background/20 rounded transition active:scale-95"
//               aria-label="Previous vehicle"
//               title="Previous"
//             >
//               <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//             </button>
//             <button
//               onClick={next}
//               className="p-2 md:p-3 hover:bg-background/20 rounded transition active:scale-95"
//               aria-label="Next vehicle"
//               title="Next"
//             >
//               <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
//           {parkVehicles.map((vehicle, index) => {
//             const offset = (index - current + parkVehicles.length) % parkVehicles.length
//             const isActive = offset === 0
//             const isNext = offset === 1
//             const isPrev = offset === parkVehicles.length - 1

//             return (
//               <div
//                 key={vehicle.id}
//                 className={`relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer ${
//                   isActive 
//                     ? 'opacity-100 order-2 md:order-1 md:col-span-2 lg:col-span-1' 
//                     : isNext || isPrev
//                     ? 'opacity-60 scale-95 hidden md:block'
//                     : 'opacity-0 scale-75 hidden'
//                 }`}
//                 onClick={() => isActive && next()}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' || e.key === ' ') {
//                     next()
//                   }
//                 }}
//               >
//                 <div className="aspect-video bg-muted relative overflow-hidden group">
//                   <img
//                     src={vehicle.image || "/placeholder.svg"}
//                     alt={vehicle.category}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
//                   />
                  
//                   {/* Overlay on active item */}
//                   {isActive && (
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-end justify-end p-4 md:p-6">
//                       <div className="w-full">
//                         <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{vehicle.category}</h3>
//                         <Button 
//                           className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
//                           onClick={(e) => {
//                             e.stopPropagation()
//                           }}
//                         >
//                           Read more
//                         </Button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Carousel Indicators */}
//         <div className="flex justify-center gap-2">
//           {parkVehicles.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-2 h-2 rounded-full transition ${
//                 index === current 
//                   ? 'bg-primary w-6' 
//                   : 'bg-background/30 hover:bg-background/50'
//               }`}
//               aria-label={`Go to vehicle ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
