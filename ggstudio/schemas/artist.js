export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Artist Name',
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
      name: 'soundcloud',
      type: 'url',
      title: 'SoundCloud URL',
    }
  ],
};
