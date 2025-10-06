"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "IT Maintenance Technician",
    company: "Freelance",
    period: "2022 - Present",
    location: "Salta, Argentina",
    description: [
      "Provided technical support, preventive maintenance and repairs for 50+ client devices",
      "Diagnosed and resolved hardware/software issues, reducing downtime significantly",
      "Delivered personalized customer service and documented technical processes",
      "Optimized workflows and implemented efficient troubleshooting procedures",
    ],
    skills: ["Technical Support", "Hardware Maintenance", "Customer Service", "Problem Solving"],
  },
]

const education = [
  {
    title: "University Technician in Software Development",
    institution: "Provincial University of Public Administration and Technical Education (UPATECO)",
    period: "2025",
    location: "Salta, Argentina",
    description: [
      "Focus on full stack web development, relational databases, and agile methodologies",
      "Final Project: Rabonapp - Soccer match organization application developed collaboratively",
      "Technologies: React.js, Python Flask, SQL database",
    ],
  },
  {
    title: "Data Analytics Career",
    institution: "CoderHouse",
    period: "Aug - Dec 2023",
    location: "Argentina",
    description: ["Data processing with Excel, Power BI and SQL", "Database creation and management"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground neon-glow-cyan">Experience</h2>
            <div className="w-12 h-1 bg-primary neon-box-cyan"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">Professional Experience</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="border-border hover:neon-border-magenta transition-all duration-300">
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="text-foreground">{exp.title}</CardTitle>
                        <div className="text-primary font-medium">{exp.company}</div>
                        <div className="text-sm text-muted-foreground">
                          {exp.period} • {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-border hover:neon-border-cyan transition-all duration-300">
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="text-foreground">{edu.title}</CardTitle>
                        <div className="text-primary font-medium">{edu.institution}</div>
                        <div className="text-sm text-muted-foreground">
                          {edu.period} • {edu.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {edu.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
