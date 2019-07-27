export default {
  name: 'placeDetails',
  title: 'Place Details',
  type: 'document',
  fields: [
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'facebookLink',
      title: 'Facebook Link',
      type: 'url',
    },
    {
      name: 'instagramLink',
      title: 'Instargram Link',
      type: 'url',
    },
    {
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'url',
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
  ],
}
