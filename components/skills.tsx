"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Flask", "RESTful APIs", "SQL", "MySQL", "Supabase"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Excel", "Power BI", "Database Design", "Agile/Scrum"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Technical Support", "Team Collaboration", "Customer Service"],
  },
  {
    title: "Additional Knowledge",
    skills: ["Generative AI Concepts", "Cybersecurity Fundamentals", "Data Analytics"],
  },
]

const certifications = [
  {
    title: "AI Generation: The ABC of Generative Artificial Intelligence",
    issuer: "Microsoft & Eidos",
    date: "April 2025",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "August 2025",
  },
  {
    title: "SQL: Database Creation (From Zero to Professional)",
    issuer: "Udemy",
    date: "August 2023",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground neon-glow-green">Skills & Certifications</h2>
            <div className="w-12 h-1 bg-primary neon-box-cyan"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              <div className="grid gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="border-border hover:neon-border-cyan transition-all duration-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-foreground">{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="border-border hover:neon-border-magenta transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground text-balance">{cert.title}</h4>
                          <p className="text-sm text-primary">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground">{cert.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="border-border hover:neon-border-cyan transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-base text-foreground">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Spanish</span>
                        <Badge variant="secondary">Native</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">English</span>
                        <Badge variant="secondary">B1 Intermediate</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
