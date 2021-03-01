const axios = require('axios');


async function getProjectID() {
  try {
    const response = await axios.get('/api/taxivegetation');
    console.log(response)
  } 
  catch (err) {
    console.log(err)
  }
 
}


getProjectID()