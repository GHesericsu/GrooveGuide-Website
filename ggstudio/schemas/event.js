export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  initialValue: {
    isFeatured: false,
    location: 'online',
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Event Name',
      description: 'REQUIRED. 2 characters to 100 characters',
      validation: (Rule) => Rule.required().min(2).max(100).warning('mind 2 characters and max 100 characters'),
    },
    {
      name: 'information',
      type: 'string',
      title: 'Information',
      description: 'REQUIRED. More information about the event. 2 characters to 4000 characters',
      validation: (Rule) => Rule.required().min(2).max(4000).warning('mind 2 characters and max 4000 characters'),
    },
    {
      name: 'liveStreamUrl',
      type: 'url',
      title: 'Live Stream URL',
    },
    {
      name: 'startTime',
      type: 'datetime',
      title: 'REQUIRED. START Date and Time',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endTime',
      type: 'datetime',
      title: 'END Date and Time',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug will be used as part of a URL',
      options: {
        source: (doc) => `${doc.name}-${doc.startTime.slice(0, 10)}`,
      },
    },
    {
      name: 'flyerImage',
      type: 'image',
      title: 'Flyer Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Feature this event?',
    },
  ],
}
