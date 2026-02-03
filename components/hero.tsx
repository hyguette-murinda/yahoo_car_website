'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[100vh] object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
        <source src="/bg.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              YAHOO CAR<br />TRANSPORT EVERYWHERE
            </h1>
            
            <p className="text-lg text-white/90 max-w-lg">
              Reliable transportation solutions with our modern fleet of vehicles. From local deliveries to international travels, Yahoo Car ensures that you arrive safely and on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-3 rounded-xl shadow-lg">
                GET STARTED
              </Button>
              {/* <Button
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:backdrop-blur-sm font-bold text-base px-8 py-3 rounded-xl transition-all duration-300"
              >
                GET A QUOTE
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
