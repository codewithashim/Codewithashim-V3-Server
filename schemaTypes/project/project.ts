import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Project Gallery',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies Used',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        }),
        defineField({
            name: 'liveLink',
            title: 'Live Project Link',
            type: 'url',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        }),
        defineField({
            name: 'isOngoing',
            title: 'Is Ongoing',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'testimonial',
            title: 'Client Testimonial',
            type: 'text',
        }),
        defineField({
            name: 'role',
            title: 'Your Role',
            type: 'string',
        }),
        defineField({
            name: 'teamSize',
            title: 'Team Size',
            type: 'number',
        }),
        defineField({
            name: 'challenges',
            title: 'Challenges Faced',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'solutions',
            title: 'Solutions Implemented',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'outcomes',
            title: 'Project Outcomes',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            hidden: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            client: 'client',
        },
        prepare(selection) {
            const { title, media, client } = selection
            return {
                title,
                media,
                subtitle: client ? `Client: ${client}` : 'Personal Project',
            }
        },
    },
})