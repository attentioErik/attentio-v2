/**
 * CSV → Sanity Import Script
 *
 * Usage:
 *   npx ts-node scripts/importCSVtoSanity.ts
 *
 * Prerequisites:
 *   - Set SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN env vars
 *   - npm install @sanity/client csv-parse tsx
 */

import { createClient } from '@sanity/client'
import { parse } from 'csv-parse/sync'
import * as fs from 'fs'
import * as path from 'path'

const PROJECT_ID = process.env.SANITY_PROJECT_ID!
const DATASET = process.env.SANITY_DATASET ?? 'production'
const TOKEN = process.env.SANITY_API_TOKEN!

if (!PROJECT_ID || !TOKEN) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_API_TOKEN environment variables')
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
})

const DOWNLOADS = path.join(process.env.HOME!, 'Downloads')

function readCsv(filename: string): Record<string, string>[] {
  const filePath = path.join(DOWNLOADS, filename)
  const content = fs.readFileSync(filePath, 'utf-8')
  return parse(content, { columns: true, skip_empty_lines: true })
}

function makeSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ── Team Members ────────────────────────────────────────────────────────────

async function importTeamMembers() {
  console.log('\n📤 Importing team members...')
  const rows = readCsv('attentio - Team Members - 64a819ca315795109d35cea8.csv')

  const transaction = client.transaction()

  for (const row of rows) {
    if (row.Archived === 'true') continue

    const doc = {
      _id: `teamMember-${row.Slug}`,
      _type: 'teamMember',
      name: row.Name,
      slug: { _type: 'slug', current: row.Slug },
      role: row['Job Title'],
      sortering: parseInt(row.Sortering) || 99,
    }

    transaction.createOrReplace(doc)
    console.log(`  ✓ ${row.Name} (${row['Job Title']})`)
  }

  await transaction.commit()
  console.log('✅ Team members imported')
}

// ── Projects ─────────────────────────────────────────────────────────────────

async function importProjects() {
  console.log('\n📤 Importing projects...')
  const rows = readCsv('attentio - Prosjekters - 64a6c5ab3af46a94338c89a4.csv')

  const transaction = client.transaction()

  for (const row of rows) {
    if (row.Archived === 'true') continue

    const galleryUrls = row['Bilder av prosjektet']
      ? row['Bilder av prosjektet'].split(';').map((u: string) => u.trim()).filter(Boolean)
      : []

    const services = row['Tjenester utført']
      ? row['Tjenester utført'].split(';').map((s: string) => s.trim()).filter(Boolean)
      : []

    const doc = {
      _id: `project-${row.Slug}`,
      _type: 'project',
      name: row.Name,
      slug: { _type: 'slug', current: row.Slug },
      heading: row['Heading 1'],
      description: row['Kort info om prosjektet'],
      cardDescription: row['Forside-beskrivelse'],
      // body is HTML from Webflow — convert to plain text or blocks as needed
      services,
      website: row['Link til nettside'] || undefined,
      promoVideo: row['Promo-video'] || undefined,
      isFeatured: row['Is featured'] === 'true',
    }

    transaction.createOrReplace(doc)
    console.log(`  ✓ ${row.Name}`)

    if (galleryUrls.length > 0) {
      console.log(`    └ ${galleryUrls.length} gallery images (upload separately)`)
    }
  }

  await transaction.commit()
  console.log('✅ Projects imported (images require separate upload via uploadImages())')
}

// ── Articles ─────────────────────────────────────────────────────────────────

async function importArticles() {
  console.log('\n📤 Importing articles...')
  const rows = readCsv('attentio - Artiklers - 64a7cfb0714138ca49e0622d.csv')

  const transaction = client.transaction()

  for (const row of rows) {
    if (row.Archived === 'true') continue

    const authorSlug = row['Author-reference'] || row['Forfatter'] || ''
    const authorRef = authorSlug
      ? { _type: 'reference', _ref: `teamMember-${authorSlug}` }
      : undefined

    const publishedAt = row['Published On']
      ? new Date(row['Published On']).toISOString().split('T')[0]
      : undefined

    const doc = {
      _id: `article-${row.Slug}`,
      _type: 'article',
      name: row.Name,
      slug: { _type: 'slug', current: row.Slug },
      title: row['h1-tittel']?.trim() || row.Name,
      excerpt: row['Post Summary'],
      author: authorRef,
      publishedAt,
      // body is HTML from Webflow — stored as-is, convert to Portable Text blocks as needed
    }

    transaction.createOrReplace(doc)
    console.log(`  ✓ ${row.Name}`)
  }

  await transaction.commit()
  console.log('✅ Articles imported')
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 Starting Sanity import...')
  console.log(`   Project: ${PROJECT_ID}`)
  console.log(`   Dataset: ${DATASET}`)

  // Import in order (team members first, articles reference them)
  await importTeamMembers()
  await importProjects()
  await importArticles()

  console.log('\n🎉 Import complete!')
  console.log('\nNext steps:')
  console.log('  1. Open Sanity Studio and verify documents')
  console.log('  2. Upload images manually or use the Sanity Asset API')
  console.log('  3. Convert HTML body content to Portable Text blocks')
}

main().catch((err) => {
  console.error('❌ Import failed:', err)
  process.exit(1)
})
