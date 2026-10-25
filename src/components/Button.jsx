import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 active:scale-[0.97]'
const variants = {
  primary: 'bg-ink text-white hover:shadow-lift hover:-translate-y-0.5',
  secondary: 'border border-ink/25 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white',
}

// Renders a router Link (to), an anchor (href) or a button, with one shared look.
export default function Button({ to, href, external, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  return <button type="button" className={cls} {...rest}>{children}</button>
}
