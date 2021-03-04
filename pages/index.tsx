import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { fetchEventData } from '../lib/fetcher';
import { datesMap } from '../lib/datesHelper';

import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface IndexProps {
  initialDate: any;
}

export const Index = ({ initialDate }: IndexProps) => {
  const [data, setData] = useState(initialDate);

  return (
    <>
      <Head>
        <title>🔥 DJ Live Streams 🔥</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <Carousel />
        <EventList dataTuples={data} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const todayDate = dayjs().format();
  const data = await fetchEventData(todayDate);
  const map = datesMap(todayDate);

  for (let i = 0; i < data.length; i += 1) {
    const parsedDate: string = dayjs(data[i].startTime).format('YYYY-MM-DD');
    map[parsedDate].push(data[i]);
  }

  Object.entries(map).forEach((el) => {
    if (el[1].length === 0) {
      delete map[el[0]];
    }
  });
  const dataTuples = Object.entries(map);
  console.log(dataTuples);
  return {
    props: {
      initialDate: dataTuples,
    },
  };
};

export default Index;
