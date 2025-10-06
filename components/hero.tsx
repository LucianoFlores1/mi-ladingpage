"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-foreground text-balance neon-glow-cyan"
            >
              Luciano Rafael Flores
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-primary font-medium neon-glow-cyan"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4" />
              <span>Salta, Argentina</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            I build scalable web solutions using modern technologies like React.js, Node.js, and Python. Recent Computer
            Software Development graduate with hands-on experience in hackathons, collaborative projects, and freelance
            technical support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild className="neon-border-magenta bg-transparent">
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/LucianoFlores1" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/lucrf" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:lucianorafaelflores@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-full h-96 bg-card rounded-lg border-2 neon-border-cyan flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="text-center space-y-4 relative z-10">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan), inset 0 0 20px var(--neon-cyan)",
                    "0 0 30px var(--neon-magenta), 0 0 60px var(--neon-magenta), inset 0 0 30px var(--neon-magenta)",
                    "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan), inset 0 0 20px var(--neon-cyan)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-32 h-32 bg-primary/20 rounded-full mx-auto flex items-center justify-center border-2 border-primary"
              >
                <span className="text-4xl font-bold text-primary neon-glow-cyan">LF</span>
              </motion.div>
              <p className="text-muted-foreground"></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
