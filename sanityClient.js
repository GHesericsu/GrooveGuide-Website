const sanityClient = require('@sanity/client');

module.exports.client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
