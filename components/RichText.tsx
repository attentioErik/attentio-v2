import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface RichTextProps {
  value: PortableTextBlock[] | string
  className?: string
}

/**
 * Renders either Portable Text blocks (from Sanity) or raw HTML strings (static fallback).
 * Wraps in same container so parent CSS (.content) styles apply to both.
 */
export default function RichText({ value, className }: RichTextProps) {
  if (typeof value === 'string') {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    )
  }

  return (
    <div className={className}>
      <PortableText value={value} />
    </div>
  )
}
