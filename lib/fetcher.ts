import axios from 'axios';

const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=`;

const eventQuery = `*[_type == "event"] {
  _id,
  name,
  information[],
  performers[]->{name},
  liveStreamUrl,
  startTime,
  endTime,
  slug,
  location,
  isFeatured,
  "imageUrl": flyerImage.asset->url,
  organization[]->{name}
}`;

export const fetchEventData = async () => {
  try {
    const response = await axios.get(`${baseUrl}${eventQuery}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
