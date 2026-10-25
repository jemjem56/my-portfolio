import { Github, Linkedin, Mail } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import Button from '../components/Button'
import { profile, isReal } from '../data/profile'

const card = 'flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white p-4 font-semibold transition hover:border-ink hover:-translate-y-0.5'

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Hello from your portfolio')}`
  return (
    <PageTransition>
      <Seo title="Contact" description={`Get in touch with ${profile.name} by email, GitHub or LinkedIn.`} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Say hello</h1>
        <p className="mt-6 text-lg leading-relaxed">If you’d like to collaborate, share an opportunity or just talk about building for the web, email is the quickest way to reach me.</p>
        <div className="mt-8">
          {isReal(profile.email) && <Button href={mailto}><Mail size={16} aria-hidden="true" /> Email {profile.email}</Button>}
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {isReal(profile.github) && <li><a className={card} href={profile.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>}
          {isReal(profile.linkedin) && <li><a className={card} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>}
        </ul>
        <p className="mt-8 text-sm text-mute">{profile.location}</p>
      </div>
    </PageTransition>
  )
}
