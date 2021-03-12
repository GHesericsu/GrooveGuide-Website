import dayjs from 'dayjs';
import { datesMap } from './datesHelper';

export const getDataTuples = (data: any[], date: string): any[][] => {
  const map = datesMap(date);
  for (let i = 0; i < data.length; i += 1) {
    const parsedDate: string = dayjs(data[i].startTime).format('YYYY-MM-DD');
    if (Object.prototype.hasOwnProperty.call(map, parsedDate)) {
      map[parsedDate].push(data[i]);
    }
  }

  Object.entries(map).forEach((el) => {
    if (el[1].length === 0) {
      delete map[el[0]];
    }
  });
  const dataTuples = Object.entries(map);

  return dataTuples;
};
