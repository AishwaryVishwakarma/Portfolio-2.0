export default {
  title: 'Experience',
  name: 'experience',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Experience Cards',
      name: 'experienceCards',
      type: 'array',
      of: [{type: 'experienceCard'}],
    },
  ],
};
