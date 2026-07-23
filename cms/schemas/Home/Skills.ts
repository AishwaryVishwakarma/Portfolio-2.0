export default {
  title: 'Skills',
  name: 'skills',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Skill Categories',
      name: 'skillCategories',
      type: 'array',
      of: [{type: 'skillCategory'}],
    },
  ],
};
