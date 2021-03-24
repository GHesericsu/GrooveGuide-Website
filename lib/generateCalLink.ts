import dayjs from 'dayjs';
import { ICalendar } from 'datebook';

interface EventProps {
  name: string,
  liveStreamUrl: string,
  startTime: string,
  endTime: string,
  artists: Array<{ name: string }>
}

export const getGoogleCalLink = (event: EventProps): string => {
  const {
    name, liveStreamUrl, startTime, endTime, artists,
  } = event;

  const start = dayjs(startTime).toISOString().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
  const end = dayjs(endTime).toISOString().replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
  const artistNames = artists && artists.map((el) => `${el.name}\n`).reduce((name, string) => name + string, '');
  const details = encodeURIComponent(`Live Stream Link: ${liveStreamUrl}\nArtists:\n${artistNames}Powered by https://GrooveGuide.Live`);

  const url = `https://calendar.google.com/calendar/r/eventedit?text=🔥${encodeURIComponent(name)}&dates=${start}/${end}&details=${details}&location=${liveStreamUrl}`;

  return url;
};

export const downloadIcs = (event: EventProps): void => {
  const {
    name, liveStreamUrl, startTime, endTime, artists,
  } = event;

  const artistNames = artists && artists.map((el) => `${el.name}\n`).reduce((artistName, string) => artistName + string, '');

  const ics = new ICalendar({
    title: name,
    location: liveStreamUrl,
    description: `Live Stream Link: ${liveStreamUrl}\nArtists:\n${artistNames}Powered by https://GrooveGuide.Live`,
    start: new Date(startTime),
    end: new Date(endTime),
  });

  ics.download();
};
