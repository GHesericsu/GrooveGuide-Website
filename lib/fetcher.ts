/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const dayjs = require('dayjs');

const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=`;

export const fetchEventData = async (date: string) : Promise<any> => {
  const startDate = dayjs(date).format('YYYY-MM-DD');
  const endDate = dayjs(date).add(7, 'day').format('YYYY-MM-DD');
  const queryString = `*[_type == "event" && startTime >= "${startDate}" && startTime <= "${endDate}"] | order(startTime asc) {
    _id,
    name,
    information[],
    artists[]->{name},
    liveStreamUrl,
    startTime,
    endTime,
    "slug": slug.current,
    location,
    isFeatured,
    "imageUrl": flyerImage.asset->url,
    "organizations": organization[]-> name
  }`;

  const sevenDaysEvents = encodeURIComponent(queryString);

  try {
    const response = await axios.get(baseUrl + sevenDaysEvents);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchEventDetails = async (slug: string): Promise<any> => {
  const queryString = `*[_type == "event" && slug.current == "${slug}"] {
    _id,
    name,
    information[],
    artists[]->{name},
    liveStreamUrl,
    startTime,
    endTime,
    "slug": slug.current,
    location,
    isFeatured,
    "imageUrl": flyerImage.asset->url,
    "organizations": organization[]-> name
  }`;

  const encodedString = encodeURIComponent(queryString);

  try {
    const response = await axios.get(`https://ny8bc8wr.api.sanity.io/v1/data/query/production?query=${encodedString}`);
    return response.data.result[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchEventSlugs = async (): Promise<any> => {
  const queryString = `*[_type == "event"] {
    "slug": slug.current
  }`;

  const encodedString = encodeURIComponent(queryString);

  try {
    const response = await axios.get(baseUrl + encodedString);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
