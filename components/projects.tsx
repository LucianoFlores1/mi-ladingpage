"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: 'Mascotas del Milagro - "Amigo Fiel"',
    description:
      "Collaborative platform for publishing and finding lost/found pets developed during Hackathon 2025. Features posting system, reports, community moderation, and RLS security policies.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/LucianoFlores1/hackathon-milagro",
    year: "2025",
    type: "Hackathon Project",
  },
  {
    title: "Noticias Salta",
    description:
      "Full-stack news platform with authentication and content management through custom API. Built using Scrum methodology with CRUD operations and JWT authentication.",
    technologies: ["React.js", "Node.js", "MySQL", "Flask", "JWT"],
    github: "https://github.com/LucianoFlores1/Noti-app",
    year: "2025",
    type: "Web Application",
  },
  {
    title: "Rabonapp",
    description:
      "Soccer match organizer application for 5-a-side matches with player and team management. University final project developed collaboratively with teammates.",
    technologies: ["React.js", "Python Flask", "SQL"],
    github: "https://github.com/WalterJr10/Rabonapp-React",
    githubBackend: "https://github.com/WalterJr10/rabonapp-flask",
    year: "2025",
    type: "University Project",
  },
  {
    title: "Payroll Management System",
    description:
      "Excel-based automated salary calculation system under Argentine labor regulations. Reduced manual calculation time by 70% using advanced formulas and pivot tables.",
    technologies: ["Excel", "VBA", "Data Analysis"],
    year: "2025",
    type: "Automation Tool",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="border-border hover:neon-border-cyan transition-all duration-300 h-full">
        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-foreground text-balance">{project.title}</CardTitle>
              <Badge variant="outline" className="text-xs">
                {project.year}
              </Badge>
            </div>
            <p className="text-sm text-primary font-medium neon-glow-cyan">{project.type}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:neon-border-magenta transition-all bg-transparent"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Frontend
                </a>
              </Button>
            )}
            {project.githubBackend && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:neon-border-magenta transition-all bg-transparent"
              >
                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Backend
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground neon-glow-cyan">Projects</h2>
            <div className="w-12 h-1 bg-primary neon-box-cyan"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
