import { defineQuery } from 'next-sanity'

// ── Tjenester ───────────────────────────────────
// Projects to match ServiceData interface
export const SERVICES_ALL_QUERY = defineQuery(`
  *[_type == "service"] | order(title asc) {
    "slug": slug.current,
    emoji,
    "meta": {
      "title": coalesce(seo.title, title),
      "description": coalesce(seo.description, hero.intro)
    },
    "hero": {
      tag,
      "h1": hero.heading,
      "intro": hero.intro
    },
    "features": {
      "tag": features.tag,
      "title": features.title,
      "items": features.items[] { _key, icon, title, text }
    },
    "process": {
      "tag": process.tag,
      "title": process.title,
      "steps": process.steps[] { _key, num, title, text, chip }
    },
    "benefits": {
      "tag": benefits.tag,
      "title": benefits.title,
      "items": benefits.items[] { _key, icon, title, text }
    },
    "faq": {
      "title": faq.title,
      "items": faq.items[] { _key, "q": question, "a": answer }
    }
  }
`)

export const SERVICE_SLUGS_QUERY = defineQuery(`
  *[_type == "service"]{ "slug": slug.current }
`)

// ── Artikler (Blogg) ────────────────────────────
// Projects to match Article interface
export const ARTICLES_ALL_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    "name": title,
    "slug": slug.current,
    title,
    "body": "",
    excerpt,
    "coverImage": coverImage.asset->url,
    "authorSlug": author->slug.current,
    "authorName": author->name,
    "publishedAt": publishedAt
  }
`)

export const ARTICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    "name": title,
    "slug": slug.current,
    title,
    body,
    excerpt,
    "coverImage": coverImage.asset->url,
    "authorSlug": author->slug.current,
    "authorName": author->name,
    "publishedAt": publishedAt
  }
`)

export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article"]{ "slug": slug.current }
`)

// ── Prosjekter (Referanser) ─────────────────────
// Projects to match Project interface
export const PROJECTS_ALL_QUERY = defineQuery(`
  *[_type == "project"] | order(isFeatured desc, _createdAt desc) {
    "name": title,
    "slug": slug.current,
    heading,
    description,
    cardDescription,
    "body": "",
    "coverImage": coverImage.asset->url,
    "images": images[].asset->url,
    "services": coalesce(serviceTags, services[]->slug.current),
    website,
    promoVideo,
    isFeatured,
    "showOnHomepage": coalesce(showOnHomepage, false)
  }
`)

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    "name": title,
    "slug": slug.current,
    heading,
    description,
    cardDescription,
    body,
    "coverImage": coverImage.asset->url,
    "images": images[].asset->url,
    "services": coalesce(serviceTags, services[]->slug.current),
    website,
    promoVideo,
    isFeatured,
    "showOnHomepage": coalesce(showOnHomepage, false)
  }
`)

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project"]{ "slug": slug.current }
`)

// ── Team ────────────────────────────────────────
// Projects to match TeamMember interface
export const TEAM_ALL_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    name,
    "slug": slug.current,
    role,
    "image": image.asset->url,
    "altText": name,
    email,
    phone,
    linkedin,
    "sortering": order
  }
`)
