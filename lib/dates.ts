import dayjs from 'dayjs';

console.log(dayjs().format(), dayjs().add(1, 'day').format());
console.log(dayjs().format());

export const getDates = (date?: string) : string[] => {
  const dates: string[] = [];
  const currentDate = date || dayjs();

  for (let i = 0; i < 7; i += 1) {
    const dateToAdd = dayjs(currentDate).add(i, 'day').format();
    dates.push(dateToAdd);
  }

  return dates;
};

export {};
