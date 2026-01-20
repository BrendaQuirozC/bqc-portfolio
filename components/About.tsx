'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-secondary-bg/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Photo placeholder with decorative border */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-accent-green rounded-lg rotate-3"></div>
              <div className="absolute -inset-4 border-2 border-accent-gold/50 rounded-lg -rotate-3"></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-accent-green/20 to-accent-gold/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-mono text-accent-green/30">BQ</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-accent-green"></div>
              <h2 className="font-mono font-bold text-4xl md:text-5xl text-text-primary">
                About Me
              </h2>
            </div>

            <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed text-justify">
              <p>
                I'm a <span className="text-accent-gold font-semibold">Front-End Web Developer</span>  with 7+ years of experience specializing in React, Node.js, and TypeScript. Proven track record in building and maintaining high-performance websites and admin panels. Strong background in Applied Mathematics and Computing, combining analytical thinking with modern development practices. Experienced in full-stack development, database management (SQL/MongoDB), and UX collaboration. Continuously leveraging AI-powered tools to enhance productivity and code quality.
              </p>
              <p>
                My key soft skills include <span className="text-accent-green font-semibold">continuous learning</span>, self-taught, adaptability to new technologies and strong <span className="text-accent-green font-semibold">analytical thinking and problem solving </span> abilities.
              </p>  
              {/* im a certified yoga teacher */}
              <p>
                I'm also a certified <span className="text-accent-green font-semibold">Yoga teacher</span>, so I truly value the balance between work and physical and mental well-being.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-green font-mono text-3xl font-bold mb-2">4</div>
                  <div className="text-text-secondary text-sm">Languages</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-gold font-mono text-3xl font-bold mb-2">BSc</div>
                  <div className="text-text-secondary text-sm">Applied Maths and Computing</div>
                </div>
              </div>

              <p className="text-sm">
                When I'm not programming, you'll find me giving yoga classes, practicing other hobbies like running and playing music, learning new languages (currently Japanese 🇯🇵) or exploring the latest trends in UX/UI design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
