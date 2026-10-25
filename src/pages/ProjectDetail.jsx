import { useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import ProjectLayout from '../components/ProjectLayout'
import NotFound from './NotFound'
import { projects, getProject } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />
  const i = projects.indexOf(project)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  return (
    <PageTransition>
      <Seo title={project.title} description={project.summary} />
      <ProjectLayout project={project} prev={prev} next={next} />
    </PageTransition>
  )
}
