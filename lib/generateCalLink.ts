import dayjs from 'dayjs';

export const getGoogleCalLink = (eventData) => {
  const {
    name, liveStreamUrl, startTime, endTime, artists,
  } = eventData;

  const start = dayjs(startTime).toISOString().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');

  const end = dayjs(endTime).toISOString().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
  const artistNames = artists && artists.map((el) => `${el.name}\n`).reduce((name, string) => name + string, '');

  const details = encodeURIComponent(`Live Stream Link: ${liveStreamUrl}\nArtists:\n${artistNames}Powered by https://GrooveGuide.Live`);

  const url = `https://calendar.google.com/calendar/r/eventedit?text=🔥${encodeURIComponent(name)}&dates=${start}/${end}&details=${details}&location=${liveStreamUrl}`;
  console.log(url);

  return url;
};
