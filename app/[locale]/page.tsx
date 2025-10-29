import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/navigation').then((mod) => mod.Navigation), { ssr: false })
const Hero = dynamic(() => import('@/components/hero').then((mod) => mod.Hero), { ssr: false })
const About = dynamic(() => import('@/components/about').then((mod) => mod.About))
const Experience = dynamic(() => import('@/components/experience').then((mod) => mod.Experience))
const Projects = dynamic(() => import('@/components/projects').then((mod) => mod.Projects))
const Services = dynamic(() => import('@/components/services').then((mod) => mod.Services), { ssr: false })
const Skills = dynamic(() => import('@/components/skills').then((mod) => mod.Skills))
const Contact = dynamic(() => import('@/components/contact').then((mod) => mod.Contact))

export default function LocaleHome() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </main>
  );
}
