import { defineField, defineType, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const service = defineType({
  name: 'service',
  title: 'Tjeneste',
  type: 'document',
  icon: CogIcon,
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
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      title: 'Hero-seksjon',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({
          name: 'heading',
          title: 'Overskrift (H1)',
          description: 'Kan inneholde <em> for kursiv aksent',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Introduksjonstekst',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Funksjoner',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({
          name: 'title',
          title: 'Seksjons-tittel',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Elementer',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Ikon (emoji)', type: 'string' }),
                defineField({ name: 'title', title: 'Tittel', type: 'string' }),
                defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 3 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Prosess',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({ name: 'title', title: 'Seksjons-tittel', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steg',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'num', title: 'Nummer', type: 'string' }),
                defineField({ name: 'title', title: 'Tittel', type: 'string' }),
                defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 3 }),
                defineField({ name: 'chip', title: 'Chip/Label', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Fordeler',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({ name: 'title', title: 'Seksjons-tittel', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Elementer',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Ikon (emoji)', type: 'string' }),
                defineField({ name: 'title', title: 'Tittel', type: 'string' }),
                defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 3 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Seksjons-tittel', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Spørsmål & svar',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'question', title: 'Spørsmål', type: 'string' }),
                defineField({ name: 'answer', title: 'Svar', type: 'text', rows: 4 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'emoji' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `${subtitle} ${title}` : title }
    },
  },
})
