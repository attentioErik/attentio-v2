import { defineField, defineType, defineArrayMember } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const project = defineType({
  name: 'project',
  title: 'Prosjekt',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Overskrift',
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
      title: 'Kort beskrivelse (kort)',
      description: 'Vises på prosjektkort',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Innhold',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt-tekst',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Coverbilde',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Galleri',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt-tekst',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Tjenester (referanser)',
      description: 'Koble til tjeneste-dokumenter når de er opprettet i Sanity',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'service' }],
        }),
      ],
    }),
    defineField({
      name: 'serviceTags',
      title: 'Tjeneste-tags',
      description: 'Brukes som fallback for tjeneste-visning (f.eks. nettside, markedsforing)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Nettside', value: 'nettside' },
          { title: 'Markedsføring', value: 'markedsforing' },
          { title: 'Medieproduksjon', value: 'medieproduksjon' },
          { title: 'AI & Automatisering', value: 'ai-automation' },
          { title: 'Branding & Design', value: 'branding-design' },
          { title: '3D-skanning', value: '3d-skanning' },
        ],
      },
    }),
    defineField({
      name: 'website',
      title: 'Nettside',
      type: 'url',
    }),
    defineField({
      name: 'promoVideo',
      title: 'Promoveringsvideo (URL)',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Fremhevet',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Vis på forside',
      description: 'Vis dette prosjektet i prosjektgalleriet på forsiden',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})
