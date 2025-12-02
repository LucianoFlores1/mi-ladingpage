"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React from 'react'

export function Hero() {
  const t = useTranslations("Hero")

  // Generate particles only on the client after mount to avoid
  // server/client HTML mismatch caused by Math.random() during SSR.
  const [particles, setParticles] = React.useState<
    | {
      left: string
      top: string
      duration: number
      delay: number
      color: string
    }[]
    | null
  >(null)

  React.useEffect(() => {
    const p = [...Array(8)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-magenta)',
    }))
    setParticles(p)
  }, [])

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
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-primary font-medium neon-glow-cyan"
            >
              {t("subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4" />
              <span>{t("location")}</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            {t("paragraph")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan">
              <a href="#contact">{t("getInTouch")}</a>
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
          <div className="w-full h-96 bg-card rounded-lg border-2 neon-border-cyan flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {particles
              ? particles.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: p.color,
                    left: p.left,
                    top: p.top,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: p.delay,
                    ease: "easeInOut",
                  }}
                />
              ))
              : null}

            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(0,0,0,0) 0%, rgba(14,165,233,0.12) 8%, rgba(0,0,0,0) 20%, rgba(236,72,153,0.10) 32%, rgba(0,0,0,0) 46%)",
                opacity: 0.9,
                filter: "blur(10px)",
                mixBlendMode: "screen",
              }}
            />

            <div className="text-center space-y-4 relative z-10">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-4 rounded-full opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-magenta), var(--neon-green), var(--neon-cyan))",
                  }}
                />

                <motion.div
                  className="absolute -inset-3 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)",
                  }}
                />

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: [
                      "0 0 30px var(--neon-cyan), 0 0 60px var(--neon-cyan), inset 0 0 30px var(--neon-cyan)",
                      "0 0 30px var(--neon-magenta), 0 0 60px var(--neon-magenta), inset 0 0 30px var(--neon-magenta)",
                      "0 0 30px var(--neon-green), 0 0 60px var(--neon-green), inset 0 0 30px var(--neon-green)",
                    ],
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan), inset 0 0 20px var(--neon-cyan)",
                      "0 0 30px var(--neon-magenta), 0 0 60px var(--neon-magenta), inset 0 0 30px var(--neon-magenta)",
                      "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan), inset 0 0 20px var(--neon-cyan)",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                  className="w-32 h-32 bg-primary/20 rounded-full mx-auto flex items-center justify-center border-2 border-primary relative overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  <span className="text-4xl font-bold text-primary neon-glow-cyan relative z-10">LF</span>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-muted-foreground relative"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 10px var(--neon-cyan)",
                      "0 0 20px var(--neon-magenta)",
                      "0 0 10px var(--neon-cyan)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                </motion.span>
              </motion.p>
            </div>

            {[
              { top: "0", left: "0", rotate: 0 },
              { top: "0", right: "0", rotate: 90 },
              { bottom: "0", right: "0", rotate: 180 },
              { bottom: "0", left: "0", rotate: 270 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8"
                style={{ ...pos }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              >
                <div
                  className="w-full h-full border-t-4 border-l-2 rounded-tl-lg"
                  style={{
                    borderColor: i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-magenta)",
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
