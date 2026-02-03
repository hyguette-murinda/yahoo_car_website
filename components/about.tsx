'use client'

export function About() {
  const aboutItems = [
    {
      title: 'COMPANY HISTORY',
      description: 'Yahoo Car started with a vision to revolutionize transportation services. From humble beginnings, we\'ve grown to become a trusted partner for businesses and individuals across multiple regions.',
    },
    {
      title: 'OUR MISSION',
      description: 'Yahoo Car is committed to providing exceptional transportation solutions with reliability, safety, and efficiency at our core. We deliver your cargo with precision and care.',
    },
    {
      title: 'COMPANY VISION',
      description: 'We envision becoming the leading transportation company by embracing innovation, sustainability, and customer satisfaction. Excellence drives everything we do.',
    },
    {
      title: 'EXPANDING GOALS',
      description: 'Yahoo Car continuously expands our network and services to better serve our customers. We\'re investing in modern fleet technology and sustainable transportation solutions.',
    },
  ]

  return (
    <section id="about" className="py-10 md:pt-40 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">About Yahoo Car</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Yahoo Car the trusted choice for transportation solutions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {aboutItems.map((item, index) => (
            <div key={index} className="space-y-4 group cursor-pointer p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-300 border border-border/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
