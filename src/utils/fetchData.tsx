const baseURL = '';

const query = `*[_type == "event"] {
  _id,
  name,
  information,
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
