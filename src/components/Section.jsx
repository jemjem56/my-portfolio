export default function Section({ id, title, action, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-14 sm:py-20 ${className}`} aria-labelledby={id ? `${id}-h` : undefined}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id={id ? `${id}-h` : undefined} className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}
