/**
 * Migrerer statisk innhold (team, artikler, prosjekter) til Sanity.
 *
 * Bruk:
 *   SANITY_TOKEN=sk... npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from '@sanity/client'
import { htmlToBlocks } from '@sanity/block-tools'
import { Schema } from '@sanity/schema'
import { JSDOM } from 'jsdom'
import sharp from 'sharp'

import { teamData } from '../lib/content/data/team'
import { articlesData } from '../lib/content/data/articles'
import { projectsData } from '../lib/content/data/projects'

// ── Client ──────────────────────────────────────
const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Mangler SANITY_TOKEN. Kjør med: SANITY_TOKEN=sk... npx tsx scripts/migrate-to-sanity.ts')
  process.exit(1)
}

const client = createClient({
  projectId: '2liejo6a',
  dataset: 'production',
  apiVersion: '2026-03-17',
  token,
  useCdn: false,
})

// ── HTML → Portable Text ────────────────────────
const bodySchema = Schema.compile({
  name: 'default',
  types: [
    {
      name: 'bodyContent',
      type: 'document',
      fields: [
        {
          name: 'body',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
})

const blockContentType = bodySchema
  .get('bodyContent')
  .fields.find((f: { name: string }) => f.name === 'body').type

function htmlToPortableText(html: string) {
  if (!html || !html.trim()) return []
  return htmlToBlocks(html, blockContentType, {
    parseHtml: (h: string) => new JSDOM(h).window.document,
  })
}

// ── Image upload ────────────────────────────────
async function uploadImage(url: string, filename?: string) {
  try {
    const name = filename || url.split('/').pop() || 'image'
    console.log(`  📷  Laster opp: ${name}`)
    const res = await fetch(url)
    if (!res.ok) {
      console.warn(`  ⚠️  Kunne ikke laste ned bilde: ${url} (${res.status})`)
      return null
    }
    let buffer = Buffer.from(await res.arrayBuffer())

    // Convert AVIF/HEIF to PNG (Sanity doesn't support all AVIF codecs)
    const isAvif = url.endsWith('.avif') || url.includes('.avif')
    const isHeif = url.endsWith('.heif') || url.endsWith('.heic')
    if (isAvif || isHeif) {
      try {
        buffer = await sharp(buffer).png().toBuffer()
      } catch {
        console.warn(`  ⚠️  Kunne ikke konvertere AVIF/HEIF: ${url}`)
        return null
      }
    }

    const asset = await client.assets.upload('image', buffer, {
      filename: isAvif || isHeif ? name.replace(/\.(avif|heif|heic)$/i, '.png') : name,
    })
    return {
      _type: 'image' as const,
      asset: { _type: 'reference' as const, _ref: asset._id },
    }
  } catch (err) {
    console.warn(`  ⚠️  Feil ved bildeopplasting: ${url}`, err)
    return null
  }
}

// ── Helpers ─────────────────────────────────────
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ── 1. Team Members ─────────────────────────────
async function migrateTeam() {
  console.log('\n👥  Migrerer teammedlemmer...')
  for (const member of teamData) {
    const _id = `teamMember-${member.slug}`
    console.log(`  → ${member.name} (${_id})`)

    const image = await uploadImage(member.image, `team-${member.slug}`)

    const doc = {
      _id,
      _type: 'teamMember' as const,
      name: member.name,
      slug: { _type: 'slug' as const, current: member.slug },
      role: member.role,
      ...(image ? { image } : {}),
      email: member.email,
      ...(member.phone ? { phone: member.phone } : {}),
      linkedin: member.linkedin,
      order: member.sortering,
    }

    await client.createOrReplace(doc)
    await sleep(300)
  }
  console.log(`✅  ${teamData.length} teammedlemmer migrert`)
}

// ── 2. Articles ─────────────────────────────────
async function migrateArticles() {
  console.log('\n📝  Migrerer artikler...')
  for (const article of articlesData) {
    const _id = `article-${article.slug}`
    console.log(`  → ${article.title} (${_id})`)

    const coverImage = article.coverImage
      ? await uploadImage(article.coverImage, `article-${article.slug}`)
      : null

    const body = htmlToPortableText(article.body)

    const doc = {
      _id,
      _type: 'article' as const,
      title: article.title,
      slug: { _type: 'slug' as const, current: article.slug },
      excerpt: article.excerpt,
      body,
      ...(coverImage ? { coverImage } : {}),
      author: {
        _type: 'reference' as const,
        _ref: `teamMember-${article.authorSlug}`,
      },
      publishedAt: new Date(article.publishedAt).toISOString(),
    }

    await client.createOrReplace(doc)
    await sleep(300)
  }
  console.log(`✅  ${articlesData.length} artikler migrert`)
}

// ── 3. Projects ─────────────────────────────────
async function migrateProjects() {
  console.log('\n🏗️  Migrerer prosjekter...')
  for (const project of projectsData) {
    const _id = `project-${project.slug}`
    console.log(`  → ${project.name} (${_id})`)

    const coverImage = project.coverImage
      ? await uploadImage(project.coverImage, `project-${project.slug}`)
      : null

    // Upload gallery images
    const galleryImages = []
    for (const imgUrl of project.images) {
      const img = await uploadImage(imgUrl, `project-${project.slug}-gallery`)
      if (img) {
        galleryImages.push({
          ...img,
          _key: Math.random().toString(36).slice(2, 10),
        })
      }
    }

    const body = htmlToPortableText(project.body)

    const doc = {
      _id,
      _type: 'project' as const,
      title: project.name,
      slug: { _type: 'slug' as const, current: project.slug },
      heading: project.heading,
      description: project.description,
      cardDescription: project.cardDescription,
      body,
      ...(coverImage ? { coverImage } : {}),
      ...(galleryImages.length > 0 ? { images: galleryImages } : {}),
      serviceTags: project.services,
      website: project.website || undefined,
      promoVideo: project.promoVideo || undefined,
      isFeatured: project.isFeatured,
    }

    await client.createOrReplace(doc)
    await sleep(300)
  }
  console.log(`✅  ${projectsData.length} prosjekter migrert`)
}

// ── Run ─────────────────────────────────────────
async function main() {
  console.log('🚀  Starter migrering til Sanity...')
  console.log(`   Prosjekt: 2liejo6a | Dataset: production\n`)

  await migrateTeam()
  await migrateArticles()
  await migrateProjects()

  console.log('\n🎉  Migrering fullført!')
  console.log('   Husk å publisere dokumentene i Sanity Studio.')
}

main().catch((err) => {
  console.error('💥  Migrering feilet:', err)
  process.exit(1)
})
