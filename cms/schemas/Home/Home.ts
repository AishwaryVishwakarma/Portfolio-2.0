export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      title: 'Hero',
      name: 'hero',
      type: 'homeHero',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'projects',
    },
  ],
  preview: {
    prepare(): {title: string} {
      return {
        title: 'Home Page Content',
      };
    },
  },
};
