// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RichContent = string | any[]

export interface Project {
  name: string
  slug: string
  heading: string
  description: string
  cardDescription: string
  body: RichContent
  coverImage: string
  images: string[]
  services: string[]
  website: string
  promoVideo: string
  isFeatured: boolean
}

export interface TeamMember {
  name: string
  slug: string
  role: string
  image: string
  altText: string
  email: string
  phone?: string
  linkedin: string
  sortering: number
}

export interface Article {
  name: string
  slug: string
  title: string
  body: RichContent
  excerpt: string
  coverImage: string
  authorSlug: string
  authorName: string
  publishedAt: string
}
