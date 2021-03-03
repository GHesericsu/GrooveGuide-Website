const axios = require('axios');
const dayjs = require('dayjs');

const today = dayjs().format();


const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=`;

const eventQuery = `*[_type == "event"] {
  _id,
  name,
  information[],
  artists[]->{name},
  liveStreamUrl,
  startTime,
  endTime,
  slug,
  location,
  isFeatured,
  "imageUrl": flyerImage.asset->url,
  organization[]->{name}
}`;

const sevenDaysEvents = encodeURIComponent(`*[_type == "event" && startTime > "2021-03-03" && startTime < "2021-03-09"] {
  _id,
  name,
  information[],
  artists[]->{name},
  liveStreamUrl,
  startTime,
  endTime,
  slug,
  location,
  isFeatured,
  "imageUrl": flyerImage.asset->url,
  organization[]->{name}
}`);

export const fetchEventData = async () => {
  try {
    const response = await axios.get(`${baseUrl}${sevenDaysEvents}`);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
