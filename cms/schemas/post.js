export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Post Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Post Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // REMOVE TAGS AND UPDATE POST FRAGMENT
    {
      name: 'tags',
      title: 'Post Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    // REMOVE CATEGORY AND UPDATE POST FRAGMENT
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    // TEST: IT WORKS

    // TEST
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Post Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'postPlaces',
      title: 'Post Places',
      type: 'array',
      of: [{ type: 'postPlace' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
