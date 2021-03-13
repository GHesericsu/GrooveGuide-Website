import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { fetchEventData } from '../lib/fetcher';
import { ChangeWeekButtons } from '../src/components/ChangeWeekButtons';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';
import { getDataTuples } from '../lib/dataHelper';

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
  // const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM-DD'));

  useEffect(() => {
    console.log('USE EFFECT');
  });


  if (!data) {
    return (
      <div>No Events Yet</div>
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
        <ChangeWeekButtons />
        <EventList dataTuples={data} />
        <ChangeWeekButtons />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const todayDate = dayjs().format();
  const data = await fetchEventData(todayDate);
  const dataTuples = getDataTuples(data, todayDate);
  return {
    props: {
      initialData: dataTuples,
    },
  };
};

export default Index;
