import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { fetchEventData, fetchFeaturedEvents } from '../lib/fetcher';
import { ChangeWeekButtons } from '../src/components/ChangeWeekButtons';
import { ImageCarousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';
import { getDataTuples } from '../lib/dataHelper';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface IndexProps {
  initialData: any;
  featuredEvents: any[];
}

export const Index = ({ initialData, featuredEvents }: IndexProps): JSX.Element => {
  const [data, setData] = useState(initialData);

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
        <ImageCarousel featuredEvents={featuredEvents} />
        <EventList dataTuples={data} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const todayDate = dayjs().format();
  const data = await fetchEventData(todayDate);
  const featuredEvents = await fetchFeaturedEvents(todayDate);
  const dataTuples = getDataTuples(data, todayDate);
  console.log('feature events:', featuredEvents);
  return {
    props: {
      initialData: dataTuples,
      featuredEvents,
    },
  };
};

export default Index;
