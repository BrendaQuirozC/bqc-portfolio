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

            <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Soy <span className="text-accent-green font-semibold">Desarrolladora Full Stack especializada en Front-End</span> con 
                una base sólida en <span className="text-text-primary">Matemáticas Aplicadas</span>. Esta combinación única 
                me permite abordar problemas complejos desde múltiples perspectivas.
              </p>

              <p>
                Desde <span className="text-accent-green">2019</span>, trabajo en <span className="text-text-primary">DISO/Global Tech Operations</span>, 
                donde lidero el desarrollo de plataformas web y paneles administrativos que manejan miles de usuarios. 
                Mi experiencia abarca desde la creación de interfaces intuitivas hasta la implementación de 
                arquitecturas backend escalables.
              </p>

              <p>
                Lo que me distingue es mi capacidad para <span className="text-text-primary">combinar análisis de datos 
                con diseño de interfaces</span>. Mi background en Data Science me permite crear soluciones que no solo 
                se ven bien, sino que están fundamentadas en datos y resuelven problemas reales.
              </p>

              {/* Highlight box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass p-6 rounded-lg border-l-4 border-accent-green mt-8"
              >
                <p className="text-text-primary italic">
                  "Combino análisis de datos con diseño de interfaces para crear soluciones 
                  que no solo se ven bien, sino que resuelven problemas reales."
                </p>
              </motion.div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-green font-mono text-3xl font-bold mb-2">6+</div>
                  <div className="text-text-secondary text-sm">Años de experiencia</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-gold font-mono text-3xl font-bold mb-2">10+</div>
                  <div className="text-text-secondary text-sm">Proyectos completados</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-green font-mono text-3xl font-bold mb-2">4</div>
                  <div className="text-text-secondary text-sm">Idiomas</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-accent-gold font-mono text-3xl font-bold mb-2">BSc</div>
                  <div className="text-text-secondary text-sm">Matemáticas Aplicadas</div>
                </div>
              </div>

              <p className="text-sm">
                Cuando no estoy programando, me encontrarás aprendiendo nuevos idiomas 
                (actualmente japonés 🇯🇵), experimentando con nuevas tecnologías como Cursor AI, 
                o explorando las últimas tendencias en UX/UI design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
