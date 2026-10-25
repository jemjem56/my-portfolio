import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page not found" description="This page does not exist." />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-mute">The address may be mistyped, or the project no longer exists.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/">Go to Home</Button>
          <Button to="/projects" variant="secondary">See projects</Button>
        </div>
      </div>
    </PageTransition>
  )
}
