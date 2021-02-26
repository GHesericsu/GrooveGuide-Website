export default {
  name: 'organization',
  type: 'document',
  title: 'Organization',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Organization Name',
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram URL',
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook URL',
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website URL'
    },
    {
      name: 'soundcloud',
      type: 'url',
      title: 'SoundCloud URL',
    }
  ],
};


