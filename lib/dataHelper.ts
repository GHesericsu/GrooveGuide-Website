import dayjs from 'dayjs';
import { datesMap } from './datesHelper';
import { EventDataTypes } from './types/eventTypes';

export const getDataTuples = (
  data: EventDataTypes[],
  todayDate: string,
): [string, EventDataTypes[]][] => {
  const map = datesMap(todayDate);

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].endTime) {
      let currentDate = dayjs(data[i].startTime).format('YYYY-MM-DD');

      const endDate = dayjs(data[i].endTime).format('YYYY-MM-DD');

      while (currentDate <= endDate) {
        if (Object.prototype.hasOwnProperty.call(map, currentDate)) {
          map[currentDate].push(data[i]);
          currentDate = dayjs(currentDate).add(1, 'day').format('YYYY-MM-DD');
        }
      }
    } else {
      const parsedStartDate: string = dayjs(data[i].startTime).format('YYYY-MM-DD');

      if (Object.prototype.hasOwnProperty.call(map, parsedStartDate)) {
        map[parsedStartDate].push(data[i]);
      }
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
