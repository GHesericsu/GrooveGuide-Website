import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { fetchEventData } from '../lib/fetcher';
import { datesMap } from '../lib/datesHelper';
import { ChangeWeekButtons } from '../src/components/ChangeWeekButtons';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface IndexProps {
  initialData: any;
}

export const Index = ({ initialData }: IndexProps): JSX.Element => {
  const [data, setData] = useState(initialData);
  const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM-DD'));

  useEffect(() => {
    console.log('USE EFFECT');
  });

  const handleChangeDate = (number: number) => {
    if (number > 0) {
      const nextWeekDate = dayjs(currentDate).add(number, 'day').format('YYYY-MM-DD');
      setCurrentDate(nextWeekDate);
      console.log(currentDate);
    } else {
      const previousWeekDate = dayjs(currentDate).subtract(Math.abs(number), 'day').format('YYYY-MM-DD');
      setCurrentDate(previousWeekDate);
      console.log(currentDate);
    }
  };

  if (!data) {
    return (
      <div>Loading...</div>
    );
  }

  console.log('RENDER');

  return (
    <>
      <Head>
        <title>🔥 GrooveGuide.live 🔥 Techno & House Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <Carousel />
        <ChangeWeekButtons handleChangeDate={handleChangeDate} />
        <EventList dataTuples={data} />
        <ChangeWeekButtons handleChangeDate={handleChangeDate} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const todayDate = dayjs().format();
  const data = await fetchEventData(todayDate);
  const map = datesMap(todayDate);
  console.log('getStaticProps Fetch');

  for (let i = 0; i < data.length; i += 1) {
    const parsedDate: string = dayjs(data[i].startTime).format('YYYY-MM-DD');
    if (map.hasOwnProperty(parsedDate)) {
      map[parsedDate].push(data[i]);
    }
  }

  Object.entries(map).forEach((el) => {
    if (el[1].length === 0) {
      delete map[el[0]];
    }
  });
  const dataTuples = Object.entries(map);
  return {
    props: {
      initialData: dataTuples,
    },
  };
};

export default Index;
