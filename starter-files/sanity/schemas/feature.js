export default {
  // Computer Name
  name: 'feature',
  // visible title
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'featureTitle',
      title: 'Feature Title',
      type: 'string',
      description: 'Title of the Feature',
    },
    {
      name: 'description',
      title: "Feature's description",
      type: 'string',
      description: 'describe the Feature',
    },
    {
      name: 'version',
      title: 'Version the feature got in to OVC',
      type: 'string',
      description: 'In what version was this Feature got in to OVC',
    },
    {
      name: 'youtubeEmbedCode',
      title: 'Code snippet to embed the Youtube video of this Feature',
      type: 'string',
      description: 'copy paste "embed code" from Youtube',
    },
  ],
};
