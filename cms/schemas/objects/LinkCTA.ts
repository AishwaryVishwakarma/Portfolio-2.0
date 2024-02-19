export default {
  title: 'Link CTA',
  name: 'linkCTA',
  type: 'object',
  fields: [
    {
      title: 'CTA Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'CTA Url',
      name: 'url',
      type: 'string',
    },
    {
      title: 'CTA ID attribute (optional)',
      description: 'This is used for the id attribute of cta, useful for SEO',
      name: 'idAttribute',
      type: 'string',
    },
  ],
};
