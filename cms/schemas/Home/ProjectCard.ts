export default {
  title: 'Project Card',
  name: 'projectCard',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'imageObject',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Live',
      name: 'live',
      type: 'linkCTA',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'linkCTA',
    },
  ],
};
