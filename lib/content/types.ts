export interface Project {
  name: string
  slug: string
  heading: string
  description: string
  cardDescription: string
  body: string
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
  linkedin: string
  sortering: number
}

export interface Article {
  name: string
  slug: string
  title: string
  body: string
  excerpt: string
  coverImage: string
  authorSlug: string
  authorName: string
  publishedAt: string
}
