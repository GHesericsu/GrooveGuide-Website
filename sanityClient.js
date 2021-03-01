const sanityClient = require('@sanity/client');
const mimi = require('./mimi');

// const axios = require('axios').default;


// const sanityProjectId = () => axios.get('http://localhost:3000/api/taxivegetation');

console.log(typeof (process.env.SANITY_PROJECT_ID));

module.exports client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: mimi.sanityToken, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

export const string = 'test string';
