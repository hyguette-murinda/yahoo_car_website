'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const serviceLinks = [
    { label: 'Long Distance', href: '#services' },
    { label: 'Freight Shipping', href: '#services' },
    { label: 'International', href: '#services' },
    { label: 'Express Delivery', href: '#services' },
  ]

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center text-primary font-bold text-sm">
                T
              </div>
              <span className="font-bold text-lg">TRANSPORT</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing reliable transport and logistics solutions across the globe.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-base md:text-lg">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-base md:text-lg">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Top Button */}
          <div>
            <h4 className="font-bold mb-4 text-base md:text-lg">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 md:w-10 md:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/40 transition active:scale-95"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )
              })}
            </div>
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary-foreground/20 rounded hover:bg-primary-foreground/30 transition text-sm"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-6 md:my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-primary-foreground/80 gap-4">
          <p>&copy; {currentYear} TransportCo. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-primary-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
