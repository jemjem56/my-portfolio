import { Download } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import Button from '../components/Button'
import SafeImage from '../components/SafeImage'
import Section from '../components/Section'
import Skills from '../components/Skills'
import Val from '../components/Val'
import { profile } from '../data/profile'

export default function About() {
  return (
    <PageTransition>
      <Seo title="About" description={`About ${profile.name}: background, goals, approach and skills.`} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 md:grid-cols-[18rem_1fr] md:pt-16">
        <SafeImage src={profile.photo1} alt={profile.photoAlt} width={408} height={612} bg="bg-white" eager className="mx-auto w-56 rounded-3xl border border-line md:w-full" imgClass="object-contain" />
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">About me</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{profile.headline}</p>
          <p className="mt-3 text-mute">{profile.location}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={profile.resume} download={profile.resumeFileName}><Download size={16} aria-hidden="true" /> Download resume</Button>
            <Button to="/projects" variant="secondary">View my projects</Button>
            <Button to="/contact" variant="secondary">Contact me</Button>
          </div>
        </div>
      </div>

      <Section id="education" title="Education">
        {profile.education.map((e) => (
          <div key={e.school} className="rounded-3xl border border-line bg-white p-6">
            <Val as="p" className="font-display text-xl font-bold">{e.school}</Val>
            <p><Val>{e.program}</Val></p>
            <p><Val>{e.years}</Val></p>
          </div>
        ))}
      </Section>

      <Section id="goals" title="Interests and goals" className="!pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-6"><h3 className="font-display text-lg font-bold">Interests</h3><Val as="p" className="mt-2">{profile.interests}</Val></div>
          <div className="rounded-3xl border border-line bg-white p-6"><h3 className="font-display text-lg font-bold">Goals</h3><Val as="p" className="mt-2">{profile.goals}</Val></div>
        </div>
      </Section>

      <Section id="approach" title="How I work" className="!pt-0">
        <ul className="grid gap-4 md:grid-cols-3">
          {profile.approach.map((a) => <li key={a} className="rounded-3xl border border-line bg-white p-6 font-semibold">{a}</li>)}
        </ul>
      </Section>

      <Section id="skills" title="Skills and tools" className="!pt-0"><Skills /></Section>
    </PageTransition>
  )
}
