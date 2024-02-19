export default {
  title: 'File CTA',
  name: 'fileCTA',
  type: 'object',
  fields: [
    {
      title: 'Document',
      name: 'document',
      type: 'file',
    },
    {
      title: 'Text',
      name: 'text',
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
