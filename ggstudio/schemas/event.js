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
      type: 'array',
      title: 'Information',
      description: 'More information about the event. MAX 4000 characters',
      validation: (Rule) => Rule.max(4000).warning('mind 2 characters and max 4000 characters'),
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H3', value: 'h3'},
        ],
        lists: [
          {title: 'Bullet', value: 'bullet'},
        ],
        marks: {
          // Only allow these decorators
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'}
          ],
        }
      }],
    },
    {
      name:'organization',
      type: 'array',
      title: 'Organization',
      of: [{
        type: 'reference',
        to: [
          {type: 'organization'},
        ]
      }],
    },
    {
      name: 'performers',
      type: 'array',
      title: 'Performers/DJs',
      of: [{
        type: 'reference',
        to: [
          {type: 'dj'},
        ]
      }],
    },
    {
      name: 'liveStreamUrl',
      type: 'url',
      title: 'Live Stream URL',
    },
    {
      name: 'startTime',
      type: 'datetime',
      title: 'REQUIRED. START Date and Time(PST)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endTime',
      type: 'datetime',
      title: 'END Date and Time(PST)',
      options: {
        timeStep: 30,
        
      },
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
