import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO-tittel',
      description: 'Overskriver sidetittelen i søkeresultat og faner',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta-beskrivelse',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Hold deg under 160 tegn for best SEO'),
    }),
    defineField({
      name: 'image',
      title: 'Delingsbilde',
      description: 'Bilde for sosiale medier (1200x630 anbefalt)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: 'Skjul fra søkemotorer',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
