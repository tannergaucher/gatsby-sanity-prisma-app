export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'placeTypes',
      title: 'Place Types',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'text',
    },
    {
      name: 'imageCredit',
      title: 'Image Credit',
      type: 'text',
    },
    {
      name: 'imageLink',
      title: 'Image Credit Link',
      type: 'url',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'placeDetails' } }],
    },
  ],
}
