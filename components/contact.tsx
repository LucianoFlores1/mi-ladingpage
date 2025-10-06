"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground neon-glow-magenta">Let's Work Together</h2>
            <div className="w-12 h-1 bg-primary mx-auto neon-box-magenta"></div>
            <p className="text-lg text-muted-foreground text-balance">
              I'm actively seeking junior full stack developer opportunities in multinational environments. Available
              for remote work or on-site positions in Salta, Argentina.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border hover:neon-border-cyan transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-foreground">lucianorafaelflores@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-foreground">+54 9 3874 871320</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-foreground">Salta, Argentina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border hover:neon-border-magenta transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:neon-border-cyan transition-all"
                    asChild
                  >
                    <a href="https://linkedin.com/in/lucrf" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:neon-border-cyan transition-all"
                    asChild
                  >
                    <a href="https://github.com/LucianoFlores1" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Portfolio
                    </a>
                  </Button>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan"
                    asChild
                  >
                    <a href="mailto:lucianorafaelflores@gmail.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-muted-foreground">© 2025 Luciano Rafael Flores. Built with Next.js and Tailwind CSS.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
