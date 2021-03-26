import dayjs from 'dayjs';
import { EventDataTypes } from './types/eventTypes';

interface LooseObj {
  [key: string]: EventDataTypes[];
}

export const datesMap = (date?: string) : LooseObj => {
  const map: LooseObj = {};
  const currentDate = date || dayjs();

  for (let i = 0; i < 7; i += 1) {
    const dateToAdd = dayjs(currentDate).add(i, 'day').format('YYYY-MM-DD');
    map[dateToAdd] = [];
  }

  return map;
};
