'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message with form data
    const whatsappMessage = `Hello Yahoo Car Team!

I'm interested in your transportation services.

📋 My Details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}

💬 Message:
${formData.message}

Looking forward to hearing from you!

Best regards,
${formData.name}`

    // Yahoo Car WhatsApp number (replace with actual number)
    const phoneNumber = "+250787313036" // Replace with Yahoo Car's WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    // Show success message
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:pt-40 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">Contact Yahoo Car</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience exceptional transportation services? Contact Yahoo Car's team today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <Card className="p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-2xl border-0 shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">Phone</h3>
                <a href="tel:+1555123456" className="text-muted-foreground hover:text-primary transition text-sm md:text-base">
                  +1 (555) 123-4567
                </a>
              </div>
            </Card>

            <Card className="p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-2xl border-0 shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">Email</h3>
                <a href="mailto:info@yahoocar.com" className="text-muted-foreground hover:text-primary transition text-sm md:text-base break-all">
                  info@yahoocar.com
                </a>
              </div>
            </Card>

            <Card className="p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-2xl border-0 shadow-md">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">Office</h3>
                <p className="text-muted-foreground text-sm md:text-base">Yahoo Car Headquarters<br />Transportation Plaza, Suite 100</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-3 md:space-y-4">
            {submitSuccess && (
              <div className="p-3 md:p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-100 text-sm md:text-base">
                WhatsApp opened! Thank you for contacting Yahoo Car.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="border-border bg-background text-sm md:text-base"
              />
              <Input
                placeholder="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border-border bg-background text-sm md:text-base"
              />
            </div>

            <Input
              placeholder="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border-border bg-background text-sm md:text-base"
            />

            <Textarea
              placeholder="Tell us about your Yahoo Car transport needs..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={4}
              className="border-border bg-background text-sm md:text-base resize-none"
            />

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
