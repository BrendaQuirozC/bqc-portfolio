'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [text, setText] = useState('')
  const [photoLoading, setPhotoLoading] = useState(true)
  const [photoError, setPhotoError] = useState(false)
  const fullText = 'Brenda Quiroz C.'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, []);

  const handleImageLoad = () => {
    setPhotoLoading(false)
  }

  const handleImageError = () => {
    setPhotoLoading(false)
    setPhotoError(true)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream">
      {/* Organic blob backgrounds - Y2K meets minimalism */}
      <motion.div 
        className="absolute top-40 -left-40 w-96 h-96 organic-blob opacity-40"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 right-20 w-80 h-80 organic-blob opacity-30"
        style={{ background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3), rgba(155, 184, 159, 0.2))' }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />


      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-mocha rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="container-custom px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content with asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Small intro badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="glass px-4 py-2 rounded-full text-sm font-medium text-mocha inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse"></span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with typewriter - editorial style */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4 text-charcoal leading-tight">
              {text}
              <span className="text-mocha">|</span>
            </h1>

            {/* Subtitle with gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-2">
                <span className="gradient-text">Front-End Developer</span>
              </h2>
              <p className="text-slate text-lg">Full Stack Engineer</p>
            </motion.div>

            {/* Description with better typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-charcoal/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light"
            >
              Transforming ideas into elegant and functional digital experiences.
              Specialized in creating interfaces that combine{' '}
              <span className="text-mocha font-medium">impeccable aesthetics</span> with{' '}
              <span className="text-mocha font-medium">clean code</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.3 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              <div className="glass-dark p-4 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-mocha mb-1">6+</div>
                <div className="text-xs text-slate">Years</div>
              </div>
              <div className="glass-dark p-4 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-coral mb-1">7+</div>
                <div className="text-xs text-slate">Projects</div>
              </div>
              <div className="glass-dark p-4 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-sage mb-1">∞</div>
                <div className="text-xs text-slate">Coffees</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                View Projects
                <svg className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Let's Talk
              </button>
            </motion.div>

            {/* Social links - minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              className="flex gap-6 mt-10"
            >
              <a 
                href="https://github.com/brendaquiroz" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-mocha transition-colors duration-300 group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/brendaquirozmac" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-mocha transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:brendaqc@hotmail.com"
                className="text-slate hover:text-mocha transition-colors duration-300 group"
                aria-label="Email"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative photo-placeholder"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-8 bg-gradient-to-br from-peach/20 via-mocha/10 to-sage/20 rounded-[3rem] rotate-3"></div>
              <div className="absolute -inset-6 bg-gradient-to-tr from-coral/20 via-mocha-light/10 to-peach/20 rounded-[3rem] -rotate-3"></div>
              
              <div className="relative glass p-12 rounded-[2.5rem] aspect-square flex items-center justify-center">

                {photoLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="text-8xl font-display font-bold text-mocha/20">BQ</div>
                    <p className="text-slate text-sm">[ Loading... ]</p>
                    {/* Spinner opcional */}
                    <div className="w-8 h-8 border-4 border-mocha/20 border-t-mocha rounded-full animate-spin mx-auto"></div>
                  </motion.div>
                )}

                {/* Imagen real */}
                {!photoError && (
                  <Image 
                  src="/me.jpg"
                  alt="Brenda Quiroz"
                  width={500}
                  height={500}
                  className="rounded-[2rem]"
                  priority // Carga primero
                  onLoad={() => setPhotoLoading(false)}
                />
                )}

                {/* Error fallback */}
                {photoError && (
                  <div className="text-center space-y-6">
                    <div className="text-8xl font-display font-bold text-mocha/20">BQ</div>
                    <p className="text-slate text-sm">[ Photo coming soon ]</p>
                  </div>
                )}
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-dark px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-xs font-mono text-mocha">UX/UI</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-dark px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-xs font-mono text-coral">React Specialist</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - refined */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate font-medium">Scroll</span>
            <svg 
              className="w-5 h-5 text-mocha" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
