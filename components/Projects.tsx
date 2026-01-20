'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  demoLink?: string
  githubLink?: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Enterprise Admin Panel',
    description: 'Complete business management system with interactive dashboard, user management, and real-time data visualization. Implemented with scalable architecture and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    demoLink: '#',
    githubLink: '#',
    image: '/project1.jpg'
  },
  {
    title: 'Corporate Website & UX Design',
    description: 'Corporate website designed from Figma to code. Focus on user experience, accessibility, and performance optimization. Includes custom animations and dark mode.',
    tags: ['Next.js', 'Figma', 'Tailwind', 'Framer Motion'],
    demoLink: '#',
    githubLink: '#',
    image: '/project2.jpg'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Data analysis and visualization platform with interactive charts. Machine learning integration for predictions and trend analysis. Data Science background applied to web development.',
    tags: ['React', 'Python', 'D3.js', 'FastAPI'],
    demoLink: '#',
    githubLink: '#',
    image: '/project3.jpg'
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'Experimental project using Cursor AI and latest technologies. AI-powered code assistant that helps in web application development and debugging.',
    tags: ['Next.js 14', 'Cursor AI', 'OpenAI', 'TypeScript'],
    demoLink: '#',
    githubLink: '#',
    image: '/project4.jpg'
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card bg-secondary-bg rounded-xl overflow-hidden group"
    >
      {/* Project image placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-accent-green/20 to-accent-gold/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-6xl font-mono text-accent-green/30"
          >
            {'{ }'}
          </motion.div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              className="btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="btn-secondary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Project info */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono px-3 py-1 rounded-full border border-green-light bg-green-light text-off-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-mono font-bold text-xl md:text-2xl mb-3 text-text-primary group-hover:text-accent-green transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              className="text-accent-green font-mono text-sm hover:text-accent-gold transition-colors duration-300 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="text-text-secondary font-mono text-sm hover:text-accent-green transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-primary-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-green"></div>
            <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary">
              Featured Projects
            </h2>
          </div>
          <p className="text-text-secondary text-lg ml-8">
            Some of my most outstanding projects
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
