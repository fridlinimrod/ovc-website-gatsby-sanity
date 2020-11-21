export default {
  // Computer Name
  name: 'bugfix',
  // visible title
  title: 'Bug Fixes',
  type: 'document',
  fields: [
    {
      name: 'bugTitle',
      title: 'Title',
      type: 'string',
      description: 'Title of the bug',
    },
    {
      name: 'description',
      title: "Bug's description",
      type: 'string',
      description: 'describe the bug',
    },
    {
      name: 'stepsToReproduce',
      title: 'Steps to reproduce',
      type: 'string',
    },
    {
      name: 'fixVersion',
      title: 'Fix Version',
      type: 'string',
      description: 'In what version was this bug fixed',
    },
    {
      name: 'youtubeEmbedCode',
      title: 'Code snippet to embed the Youtube video of the bug',
      type: 'string',
      description: 'copy paste "embed code" from Youtube',
    },
  ],
};
