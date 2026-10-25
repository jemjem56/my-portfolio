import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const list = { show: { transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.25 } } }

export default function Projects() {
  return (
    <PageTransition>
      <Seo title="Projects" description="Six projects by James Panugaling with descriptions, roles and technologies." />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Projects</h1>
        <p className="mt-4 max-w-xl text-mute">Six projects. Select any card to read the full story behind it.</p>
        <motion.ul variants={list} initial="hidden" animate="show" className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <motion.li key={p.slug} variants={item}><ProjectCard project={p} /></motion.li>
          ))}
        </motion.ul>
      </div>
    </PageTransition>
  )
}
