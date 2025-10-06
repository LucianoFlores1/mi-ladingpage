"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground neon-glow-magenta">About</h2>
            <div className="w-12 h-1 bg-primary neon-box-magenta"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I'm a passionate Full Stack Developer from Salta, Argentina, with a strong foundation in modern web
              technologies. As a recent graduate in Computer Software Development, I bring fresh perspectives combined
              with practical experience from collaborative projects and hackathons.
            </p>

            <p>
              My journey in technology extends beyond development - I've been providing freelance IT maintenance and
              technical support services since 2022, helping over 50 clients optimize their systems and resolve
              technical challenges. This experience has sharpened my problem-solving skills and taught me the importance
              of clear communication with clients.
            </p>

            <p>
              I'm particularly drawn to projects that challenge me to learn new technologies and work collaboratively.
              Whether it's building a pet finder platform during a hackathon or developing a comprehensive news
              application with custom APIs, I approach each project with enthusiasm and attention to detail.
            </p>

            <p>
              Currently seeking junior full stack developer opportunities in multinational environments where I can
              contribute to meaningful projects while continuing to grow my technical expertise. I'm proficient in
              English (B1 level) and excited about the possibility of working with diverse, international teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
