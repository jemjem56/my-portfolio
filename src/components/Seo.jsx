import { useEffect } from 'react'
import { profile } from '../data/profile'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${profile.firstName} Panugaling` : `${profile.name} | ${profile.title}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
  return null
}
