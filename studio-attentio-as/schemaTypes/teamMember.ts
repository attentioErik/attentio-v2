import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Teammedlem',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rolle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'E-post',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn-URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Sortering',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Sortering',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
