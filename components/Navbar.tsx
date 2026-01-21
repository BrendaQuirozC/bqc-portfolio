'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['hero', 'projects', 'about', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false)
    
    // Small delay to ensure menu closes before scroll
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        // Use scrollIntoView with block start - CSS scroll-margin-top will handle the offset
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 150)
  }

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="progress-bar"
        style={{ width: progressWidth }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-subtle"
      >
        <div className="container-custom px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="font-mono font-bold text-xl text-text-primary hover:text-accent-green transition-colors duration-300"
            >
              <span className="text-accent-green">{'<'}</span>
              BQC
              <span className="text-accent-green">{'/>'}</span>
            </button>

            {/* Nav items */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={` text-sm transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-accent-green'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-green transition-transform duration-300 origin-left ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-primary hover:text-accent-green transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass border-t border-border-subtle px-6 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 relative group text-left py-2 ${
                    activeSection === item.id
                      ? 'text-accent-green'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-green transition-transform duration-300 origin-left ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
