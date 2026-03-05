import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Prosjekt',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Overskrift (H1)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cardDescription',
      title: 'Kortbeskrivelse (til prosjektkort)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'Innhold',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Forsidebilde',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Galleri',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'services',
      title: 'Tjenester utført',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Nettside', value: 'nettside' },
          { title: 'Markedsføring', value: 'markedsforing' },
          { title: 'Medieproduksjon', value: 'medieproduksjon' },
          { title: 'AI & Automatisering', value: 'ai-automatisering' },
          { title: 'Branding & Design', value: 'branding-design' },
          { title: '3D-skanning', value: '3d-skanning' },
        ],
      },
    }),
    defineField({
      name: 'website',
      title: 'Kundens nettside',
      type: 'url',
    }),
    defineField({
      name: 'promoVideo',
      title: 'Promo-video URL',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Fremhevet',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'cardDescription',
      media: 'coverImage',
    },
  },
})
