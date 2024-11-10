import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Code', value: 'code' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  { type: 'project' },
                  { type: 'experience' },
                  { type: 'category' },
                  { type: 'author' },
                ],
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        withFilename: true,
        languageAlternatives: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Python', value: 'python' },
          { title: 'Java', value: 'java' },
          { title: 'C#', value: 'csharp' },
          { title: 'PHP', value: 'php' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Shell', value: 'shell' },
          { title: 'JSON', value: 'json' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'YAML', value: 'yaml' },
          { title: 'SQL', value: 'sql' },
          { title: 'GraphQL', value: 'graphql' },
          { title: 'XML', value: 'xml' },
          { title: 'Bash', value: 'bash' },
          { title: 'Dockerfile', value: 'dockerfile' },
          { title: 'Makefile', value: 'makefile' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Rust', value: 'rust' },
          { title: 'Swift', value: 'swift' },
          { title: 'Kotlin', value: 'kotlin' },
          { title: 'C++', value: 'cpp' },
          { title: 'C', value: 'c' },
          { title: 'Objective-C', value: 'objective-c' },
          { title: 'Perl', value: 'perl' },
          { title: 'Scala', value: 'scala' },
          { title: 'Groovy', value: 'groovy' },
          { title: 'Lua', value: 'lua' },
          { title: 'R', value: 'r' },
          { title: 'Clojure', value: 'clojure' },
          { title: 'Haskell', value: 'haskell' },
          { title: 'Elixir', value: 'elixir' },
          { title: 'Erlang', value: 'erlang' },
          { title: 'F#', value: 'fsharp' },
          { title: 'Go', value: 'go' },
          { title: 'Scala', value: 'scala' },
        ],
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout',
      fields: [
        {
          name: 'type',
          type: 'string',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Warning', value: 'warning' },
              { title: 'Tip', value: 'tip' },
              { title: 'Note', value: 'note' },
            ],
          },
        },
        {
          name: 'content',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'customTable',
      title: 'Table',
      fields: [
        {
          name: 'rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineArrayMember({
      type: 'file',
      name: 'attachment',
      title: 'Attachment',
    }),
    defineArrayMember({
      type: 'object',
      name: 'embed',
      title: 'Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
  ],
})