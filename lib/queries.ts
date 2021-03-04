export const queryString = `*[_type == "event" && startTime >= "2021-03-03" && startTime <= "2021-03-10"] | order(startTime asc) {
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
