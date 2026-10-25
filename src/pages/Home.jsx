import { Download, Mail, MousePointer2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const Tag = ({ className, children }) => (
  <span className={`absolute flex items-center gap-2 rounded-2xl border border-line bg-white/90 px-3 py-2 text-xs font-semibold shadow-soft backdrop-blur-sm sm:px-4 sm:text-sm ${className}`}>
    <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />{children}
  </span>
)

export default function Home() {
  return (
    <PageTransition>
      <Seo description={profile.headline} />
      <section className="mx-auto max-w-7xl px-4 pt-4" aria-label="Introduction">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel shadow-soft lg:min-h-[42rem]">
          <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 select-none font-display text-[30vw] font-black leading-none text-ink/[0.045] lg:text-[17rem]">JAMES</span>

          <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-10 lg:w-[55%] lg:p-14 lg:pt-20">
            <div>
              <h1 className="font-display text-[clamp(4rem,20vw,7rem)] font-black leading-[0.9] tracking-tight lg:text-[clamp(4rem,10vw,9rem)]">
                {profile.firstName}<span className="sr-only"> {profile.middleName} {profile.lastName}</span>
              </h1>
              <p className="mt-1 text-sm text-mute" aria-hidden="true">{profile.name}</p>
              <p className="mt-4 font-display text-xl font-bold sm:text-2xl">{profile.title}</p>
            </div>
            <p className="max-w-md text-base leading-relaxed text-mute">{profile.headline}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="#selected-work">Explore My Work</Button>
              <Button href={profile.resume} download={profile.resumeFileName} variant="secondary"><Download size={16} aria-hidden="true" /> Download CV</Button>
            </div>
            <a href="#selected-work" className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-mute hover:text-ink">
              <MousePointer2 size={16} aria-hidden="true" /> Scroll to selected work
            </a>
          </div>

          <div className="relative mx-auto mt-2 w-3/4 max-w-sm lg:absolute lg:bottom-0 lg:right-[5%] lg:mt-0 lg:w-[24rem] lg:max-w-none">
            <SafeImage src={profile.photo} alt={profile.photoAlt} width={408} height={612} bg="bg-transparent" eager label="Add your photo at public/images/portrait.png" imgClass="drop-shadow-[0_28px_28px_rgba(0,0,0,0.28)]" />
            <Tag className="left-0 top-[16%] lg:-left-14">{profile.focus[0]}</Tag>
            <Tag className="right-0 top-[48%] lg:-right-10">{profile.focus[1]}</Tag>
          </div>
        </div>
      </section>

      <Section id="introduction" title="Building with curiosity" className="!pb-4">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-lg leading-relaxed">{profile.headline}</p>
          <Button to="/about" variant="secondary">More about me</Button>
        </div>
      </Section>

      {/* <Section id="selected-work" title="Selected work" action={<Link to="/projects" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">View all six projects</Link>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section> */}

      {/* <Section id="skills" title="Skills overview" action={<Link to="/about" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">Full skills on About</Link>}>
        <Skills />
      </Section> */}

      <section className="mx-auto max-w-7xl px-4" aria-labelledby="cta-h">
        <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-14">
          <h2 id="cta-h" className="max-w-xl font-display text-3xl font-extrabold sm:text-5xl">Let's build something useful together.</h2>
          <p className="mt-4 max-w-md text-white/80">Open to collaborations, learning opportunities and conversations.</p>
          <Link to="/contact" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 focus-visible:outline-white">
            <Mail size={16} aria-hidden="true" /> Get in touch
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
