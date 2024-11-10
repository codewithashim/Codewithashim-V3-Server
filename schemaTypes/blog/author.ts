import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'roles',
            title: 'Roles',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g., "Full Stack Developer", "UI/UX Designer"',
        }),
        defineField({
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
            description: 'A brief introduction (150-200 characters)',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                { name: 'github', type: 'url', title: 'GitHub' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'twitter', type: 'url', title: 'Twitter' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
                { name: 'facebook', type: 'url', title: 'Facebook' },
                { name: 'website', type: 'url', title: 'Personal Website' },
            ],
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of professional skills',
        }),
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
            description: 'Upload your resume/CV',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'shortBio',
        },
    },
})