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
      title: 'Experience',
      name: 'experience',
      type: 'experience',
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
