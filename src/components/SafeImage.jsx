import { useState } from 'react'

// Image with reserved space (no layout shift), lazy loading and a readable fallback.
export default function SafeImage({ src, alt, width, height, label, bg = 'bg-neutral-200', className = '', imgClass = '', eager = false }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className={`relative overflow-hidden ${bg} ${className}`} style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}>
      {failed ? (
        <div role="img" aria-label={alt} className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-mute">
          {label || 'Image not available yet'}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`reveal h-full w-full object-cover ${imgClass}`}
        />
      )}
    </div>
  )
}
