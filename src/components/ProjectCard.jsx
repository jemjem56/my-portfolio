import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SafeImage from './SafeImage'
import Val from './Val'

export default function ProjectCard({ project: p }) {
  const reduced = useReducedMotion()
  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-colors hover:border-ink/40 focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-ink"
    >
      <SafeImage src={p.image} alt={p.imageAlt} width={16} height={10} label="Screenshot coming soon" className="w-full" imgClass="transition duration-300 group-hover:scale-[1.03]" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Val className="text-sm font-semibold text-mute">{p.category}</Val>
        <h3 className="font-display text-2xl font-extrabold leading-tight"><Val>{p.title}</Val></h3>
        <Val as="p" className="text-sm leading-relaxed text-mute">{p.summary}</Val>
        {p.tech.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {p.tech.map((t) => <li key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">{t}</li>)}
          </ul>
        ) : (
          <p className="text-xs italic text-mute">[Add technologies used]</p>
        )}
        <Link
          to={`/projects/${p.slug}`}
          className="mt-auto pt-3 text-sm font-bold underline decoration-2 underline-offset-4 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          View Project<span className="sr-only">: {p.title}</span>
        </Link>
      </div>
    </motion.article>
  )
}
