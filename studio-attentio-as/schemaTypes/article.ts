import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const article = defineType({
  name: 'article',
  title: 'Artikkel',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'excerpt',
      title: 'Sammendrag',
      type: 'text',
      rows: 3,
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
      name: 'author',
      title: 'Forfatter',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Publiseringsdato (nyeste først)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `av ${author}` : '',
        media,
      }
    },
  },
})
