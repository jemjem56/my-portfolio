// Shows a data value; placeholders (starting with "[") are italic so they are easy to spot.
export default function Val({ as: Tag = 'span', className = '', children }) {
  const placeholder = typeof children === 'string' && children.startsWith('[')
  return <Tag className={`${className} ${placeholder ? 'italic text-mute' : ''}`}>{children}</Tag>
}
