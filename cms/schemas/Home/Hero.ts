export default {
  title: 'Home Hero',
  name: 'homeHero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Colored Text',
      name: 'coloredText',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageObject',
    },
    {
      title: 'Resume',
      name: 'resume',
      description: 'Upload the resume pdf',
      type: 'fileCTA',
    },
    {
      title: 'CTA 2',
      name: 'cta2',
      type: 'linkCTA',
    },
  ],
};
