'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close mobile menu when a link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  // Track scroll position for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT US' },
    // { href: '#vehicle-park', label: 'VEHICLE PARK' },
    { href: '#fleet', label: 'VEHICLE FLEET' },
    { href: '#services', label: 'SERVICES' },
    { href: '#contact', label: 'CONTACT US' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar - Hidden on Mobile */}
      <div className="hidden sm:block bg-primary text-primary-foreground py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span>Mon - Sat: 7:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>+250788544321</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>info@yahoocar.rw</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-lg bg-background/98' : ''}`}>
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" onClick={handleNavClick} className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-base md:text-lg shadow-md">
                Y
              </div>
              <span className="font-bold text-lg md:text-xl hidden sm:inline text-foreground">YAHOO CAR</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Toggle & Theme */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 hover:bg-secondary rounded transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-3 pb-3 border-t border-border pt-3 space-y-1 animate-in fade-in slide-in-from-top-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
