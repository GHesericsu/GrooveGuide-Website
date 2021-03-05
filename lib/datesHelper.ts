import dayjs from 'dayjs';
import { AnyRecordWithTtl, AnySoaRecord } from 'dns';


// console.log(dayjs().format(), dayjs().add(1, 'day').format());
// // console.log(dayjs(dayjs()).format());
// console.log(typeof dayjs().format())

// const todayDate = dayjs().format();

// const startDate = dayjs(todayDate).format('YYYY-MM-DD');
// const endDate = dayjs(todayDate).add(7, 'day').format('YYYY-MM-DD');
// console.log(startDate, typeof startDate);
// console.log(endDate, typeof endDate);


interface LooseObj {
  [key: string]: any[]
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

// console.log(datesMap(dayjs().format()));
