"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const features = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "Built with React, Next.js, and Tailwind CSS for optimal performance",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique, eye-catching designs tailored to your brand identity",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: Rocket,
      title: "SEO Optimized",
      description: "Built with best practices for search engine visibility",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Landing Page Creation Service</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your ideas into stunning, high-converting landing pages that captivate your audience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 neon-glow">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 neon-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 neon-text-subtle">Example Project: Quincho El Milagro</h3>
              <p className="text-muted-foreground mb-6">
                A modern landing page showcasing a venue rental service with elegant design, smooth animations, and
                responsive layout. Built with Next.js and featuring image galleries, contact forms, and optimized
                performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="neon-button">
                  <a
                    href="https://github.com/lucianoflores1/quincho-el-milagro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="neon-border-hover bg-transparent">
                  <a href="#contact">Get Your Landing Page</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden neon-border">
                <img
                  src="/ejemplo_de_quincho.jpg"
                  alt="Landing page example"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">What You Get</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-card/50 neon-border-hover">
              <div className="text-3xl font-bold text-primary mb-2 neon-text">100%</div>
              <p className="text-sm text-muted-foreground">Responsive Design</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 neon-border-hover">
              <div className="text-3xl font-bold text-primary mb-2 neon-text">Fast</div>
              <p className="text-sm text-muted-foreground">Loading Speed</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 neon-border-hover">
              <div className="text-3xl font-bold text-primary mb-2 neon-text">SEO</div>
              <p className="text-sm text-muted-foreground">Optimized</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
