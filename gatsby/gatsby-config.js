import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'OVC',
    siteUrl: 'https://gatsby.ovc',
    description: 'One Video Control (to rule them all)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5693882915720616`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9vkkhmyp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
