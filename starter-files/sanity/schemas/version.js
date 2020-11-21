export default {
  // Computer Name
  name: 'version',
  // visible title
  title: 'Version',
  type: 'document',
  fields: [
    {
      name: 'versionNumber',
      title: 'Version Number',
      type: 'string',
      description: 'The version number (i.e: 1.0.17)',
    },
    {
      name: 'bugFixes',
      title: 'Bug fixes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'bugfix' }] }],
      description: 'Bugs that got fixed in this version',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
      description: 'Features that got in to OVC in this version',
    },
    {
      name: 'youtubeEmbedCode',
      title: 'Code snippet to embed the Youtube video of this Version',
      type: 'string',
      description: 'copy paste "embed code" from Youtube',
    },
  ],
};
