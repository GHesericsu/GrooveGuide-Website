const axios = require('axios');
const dayjs = require('dayjs');




export const fetchEventData = async (date: string) : Promise<any> => {
  const startDate = dayjs(date).format('YYYY-MM-DD');
  const endDate = dayjs(date).add(7, 'day').format('YYYY-MM-DD');
  const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=`;
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
    const response = await axios.get(`${baseUrl}${sevenDaysEvents}`);
    return response.data.result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

async function testFetcher() {
  const input = dayjs().format();

  const response = await fetchEventData(input);

  console.log(response);
}

testFetcher();
