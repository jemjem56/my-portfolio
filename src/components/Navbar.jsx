import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import Button from './Button'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
const linkCls = ({ isActive }) =>
  `inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors ${isActive ? 'bg-ink text-white' : 'text-ink hover:bg-paper'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-3 z-50 mx-auto max-w-7xl px-4 pt-3" onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <div className="rounded-3xl border border-line bg-panel/95 px-3 py-2 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between gap-2">
          <Link to="/" aria-label={`${profile.name}, home`} className="flex min-h-11 items-center gap-2 rounded-full px-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-black text-white">{profile.monogram}</span>
            <span className="hidden font-display text-sm font-bold sm:inline">{profile.firstName} Panugaling</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={linkCls}>{l.label}</NavLink>)}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={profile.resume} download={profile.resumeFileName} variant="secondary" className="min-h-10 px-4">
              <Download size={16} aria-hidden="true" /> Resume
            </Button>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="mt-2 grid gap-1 border-t border-line pt-2 md:hidden">
            {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={linkCls}>{l.label}</NavLink>)}
          </nav>
        )}
      </div>
    </header>
  )
}
