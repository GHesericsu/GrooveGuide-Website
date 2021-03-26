/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const dayjs = require('dayjs');

const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=`;

interface BlockContentProps {
  blocks: any[] | [];
}

interface EventDataTypes {
  _id: string;
  name: string;
  artists: { name: string }[];
  endTime: string;
  startTime: string;
  imageUrl: string;
  information: BlockContentProps[];
  isFeatured: boolean;
  liveStreamUrl: string;
  location: string;
  organizations: string[];
  slug: string;
}

export const fetchEventData = async (date: string) : Promise<EventDataTypes[]> => {
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
    return error.response;
  }
};

export const fetchEventDetails = async (slug: string): Promise<EventDataTypes> => {
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
    return error.response;
  }
};

export const fetchEventSlugs = async (): Promise<{ slug: string }[]> => {
  const queryString = `*[_type == "event"] {
    "slug": slug.current
  }`;

  const encodedString = encodeURIComponent(queryString);

  try {
    const response = await axios.get(baseUrl + encodedString);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

interface FeaturedEventsProps {
  name: string;
  imageUrl: string;
  slug: string;
}

export const fetchFeaturedEvents = async (date: string): Promise<FeaturedEventsProps[]> => {
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  const queryString = `*[_type == "event" && startTime >= "${formattedDate}" && isFeatured == true] | order(startTime asc) {
    name,
    "imageUrl": flyerImage.asset->url,
    "slug": slug.current

  }`;

  const encodedString = encodeURIComponent(queryString);

  try {
    const response = await axios.get(baseUrl + encodedString);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
