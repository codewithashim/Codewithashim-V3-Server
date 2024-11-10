import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'fieldOfStudy',
            title: 'Field of Study',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        }),
        defineField({
            name: 'grade',
            title: 'Grade',
            type: 'string',
        }),
        defineField({
            name: 'activities',
            title: 'Activities and Societies',
            type: 'text',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Institution Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'institution',
            subtitle: 'degree',
            media: 'image',
        },
    },
})