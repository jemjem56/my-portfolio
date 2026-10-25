import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SafeImage from './SafeImage'
import Button from './Button'
import Val from './Val'
import { isReal } from '../data/profile'

const Block = ({ title, children }) => (
  <section className="border-t border-line py-8 md:grid md:grid-cols-[14rem_1fr] md:gap-8">
    <h2 className="mb-3 font-display text-xl font-extrabold md:mb-0">{title}</h2>
    <div className="max-w-2xl leading-relaxed">{children}</div>
  </section>
)
const List = ({ items }) => (
  <ul className="list-disc space-y-2 pl-5">{items.map((i) => <li key={i}><Val>{i}</Val></li>)}</ul>
)

export default function ProjectLayout({ project: p, prev, next }) {
  const hasLinks = isReal(p.demoUrl) || isReal(p.repoUrl)
  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:underline">
        <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
      </Link>
      <header className="mt-4">
        <Val className="text-sm font-semibold text-mute">{p.category}</Val>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-6xl"><Val>{p.title}</Val></h1>
        <Val as="p" className="mt-4 max-w-2xl text-lg">{p.summary}</Val>
        <div className="mt-6 flex flex-wrap gap-3">
          {isReal(p.demoUrl) && <Button href={p.demoUrl} external>Live demo <ArrowUpRight size={16} aria-hidden="true" /></Button>}
          {isReal(p.repoUrl) && <Button href={p.repoUrl} external variant="secondary">Source code <ArrowUpRight size={16} aria-hidden="true" /></Button>}
          {!hasLinks && <p className="text-sm italic text-mute">[Add a live demo or repository link in src/data/projects.js]</p>}
        </div>
      </header>
      <div className="mt-8 grid gap-5">
        <SafeImage
          src={p.image}
          alt={p.imageAlt}
          width={16}
          height={9}
          label="Project screenshot coming soon"
          className="mt-8 w-full rounded-3xl border border-line shadow-soft"
          eager
        />
      </div>
      <div className="mt-10">
        <Block title="Overview"><Val as="p">{p.overview}</Val></Block>
        <Block title="Objective"><Val as="p">{p.objective}</Val></Block>
        <Block title="Description"><Val as="p">{p.description}</Val></Block>
        <Block title="My role"><Val as="p">{p.role}</Val></Block>
        <Block title="Tech stack">
          {p.tech.length ? (
            <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-white px-3 py-1 text-sm font-semibold border border-line">{t}</li>)}</ul>
          ) : (
            <p className="italic text-mute">[Add technologies used]</p>
          )}
        </Block>
      </div>

      <nav aria-label="More projects" className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        <Link to={`/projects/${prev.slug}`} className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white p-4 transition hover:border-ink">
          <ChevronLeft aria-hidden="true" /><span><span className="block text-xs text-mute">Previous project</span><span className="font-bold">{prev.title}</span></span>
        </Link>
        <Link to={`/projects/${next.slug}`} className="flex min-h-14 items-center justify-end gap-3 rounded-2xl border border-line bg-white p-4 text-right transition hover:border-ink">
          <span><span className="block text-xs text-mute">Next project</span><span className="font-bold">{next.title}</span></span><ChevronRight aria-hidden="true" />
        </Link>
      </nav>
    </article>
  )
}
