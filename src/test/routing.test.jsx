import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { projects } from '../data/projects'

const at = (path) => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)

test('there are exactly six unique projects', () => {
  expect(projects).toHaveLength(6)
  expect(new Set(projects.map((p) => p.slug)).size).toBe(6)
})

test('projects page lists six View Project links', () => {
  at('/projects')
  expect(screen.getAllByRole('link', { name: /View Project/ })).toHaveLength(6)
})

test.each(projects)('detail page renders for $slug', (p) => {
  at(`/projects/${p.slug}`)
  expect(screen.getByRole('heading', { level: 1, name: p.title })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Back to Projects/ })).toBeInTheDocument()
})

test('unknown project shows the not-found page with a Home link', () => {
  at('/projects/nope')
  expect(screen.getByRole('heading', { name: /Page not found/ })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Go to Home' })).toBeInTheDocument()
})
