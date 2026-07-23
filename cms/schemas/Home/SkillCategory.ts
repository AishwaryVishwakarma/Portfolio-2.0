export default {
  title: 'Skill Category',
  name: 'skillCategory',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      skills: 'skills',
    },
    prepare({title, skills = []}: {title: string; skills?: string[]}) {
      return {
        title: title ?? 'Skill Category',
        subtitle: skills.join(', '),
      };
    },
  },
};
