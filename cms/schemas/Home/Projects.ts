export default {
  title: 'Projects',
  name: 'projects',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Project Cards',
      name: 'projectCards',
      type: 'array',
      of: [{type: 'projectCard'}],
    },
  ],
};
