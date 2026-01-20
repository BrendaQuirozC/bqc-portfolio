'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  category: string
}

const skills: Skill[] = [
  // Front-End
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML/CSS3', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  
  // Back-End
  { name: 'Node.js', category: 'Backend' },
  { name: 'Javascript', category: 'Backend' },
  { name: 'TypeScript', category: 'Backend' },
  { name: 'API REST', category: 'Backend' },
  
  // Database
  { name: 'SQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  
  // Tools
  { name: 'Jira', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Cursor AI', category: 'Tools' },
  { name: 'Droid', category: 'Tools' },

  //DevOPs
  { name: 'Git/GitHub', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Firebase', category: 'DevOps' },
  { name: 'DigitalOcean', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' }, 
  
  //Metodologies
  { name: 'Scrum', category: 'Metodologies' },
  { name: 'Code Review', category: 'Metodologies' },

  // Data Analytics
  { name: 'Python', category: 'Data' },
  { name: 'R', category: 'Data' },
  { name: 'Advanced Excel', category: 'Data' },
]

const categories = [
  { name: 'Frontend', title: 'Front-End Specialist', color: 'accent-green' },
  { name: 'Backend', title: 'Back-End', color: 'accent-gold' },
  { name: 'Database', title: 'Database', color: 'accent-green' },
  { name: 'DevOps', title: 'DevOps', color: 'accent-gold' },
  { name: 'Tools', title: 'Tools & Design', color: 'accent-gold' },
  { name: 'Data', title: 'Data Analytics', color: 'accent-green' },
  { name: 'Metodologies', title: 'Metodologies', color: 'accent-gold' },
]

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 0 20px #9bb89f'
      }}
      className="skill-icon border border-border-subtle rounded-lg px-4 py-3 text-center group bg-green-light text-white"
    >
      <span className="font-mono text-sm md:text-base text-off-white group-hover:text-off-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-primary-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-green"></div>
            <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-text-secondary text-lg">
            Tools and technologies I master
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category.name)
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <div className="mb-6 flex items-center gap-3">
                  <h3 className={`font-mono font-bold text-2xl md:text-3xl text-${category.color}`}>
                    {category.title}
                  </h3>
                  <div className={`flex-grow h-0.5 bg-${category.color}/30`}></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBadge key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies. 
            My background in <span className="text-accent-green">Mathematics and Data Science</span> gives me 
            a unique advantage in web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
