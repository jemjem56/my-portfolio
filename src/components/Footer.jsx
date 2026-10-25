import { Link } from 'react-router-dom'
import { profile, isReal } from '../data/profile'

const a = 'inline-flex min-h-11 items-center underline-offset-4 hover:underline'
export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-4 pb-10">
      <div className="flex flex-col gap-4 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-mute">© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
          <Link className={a} to="/projects">Projects</Link>
          <Link className={a} to="/about">About</Link>
          <Link className={a} to="/contact">Contact</Link>
          {isReal(profile.github) && <a className={a} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {isReal(profile.linkedin) && <a className={a} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </nav>
      </div>
    </footer>
  )
}
