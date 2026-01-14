'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-bg border-t border-border-subtle py-8">
      <div className="container-custom px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Logo/Name */}
          <div className="font-mono text-text-primary">
            <span className="text-accent-green">{'<'}</span>
            Brenda Quiroz Catalán
            <span className="text-accent-green">{'/>'}</span>
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-sm">
            © {currentYear} Designed and developed with{' '}
            <span className="text-accent-green">♥</span> by Brenda
          </div>

          {/* Quick links */}
          <div className="flex gap-4 text-sm text-text-secondary">
            <a
              href="https://github.com/brendaquiroz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors duration-300"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/brendaquirozmac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:brendaqc@hotmail.com"
              className="hover:text-accent-green transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
