import Head from 'next/head';
import { isIOS, isMobile, isMacOs } from 'react-device-detect';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import { fetchEventData, fetchFeaturedEvents } from '../lib/fetcher';
import { ImageCarousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';
import { getDataTuples } from '../lib/dataHelper';
import { EventDataTypes } from '../lib/types/eventTypes';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface IndexProps {
  initialData: [string, EventDataTypes[]][];
  featuredEvents: {
    name: string;
    imageUrl: string;
    slug: string;
  }[];
}

export const Index = ({ initialData, featuredEvents }: IndexProps): JSX.Element => {
  const [data, setData] = useState(initialData);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (isIOS === true) {
      setIos(isIOS);
      console.log('index page ios', ios);
    }
  }, []);

  if (!data) {
    return (
      <div>No Events Yet</div>
    );
  }

  console.log('RENDER');
  console.log('ios is', ios);
  return (
    <>
      <Head>
        <title>🔥 GrooveGuide.live 🔥 Techno & House Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <ImageCarousel featuredEvents={featuredEvents} />
        <EventList dataTuples={data} isIos={ios}/>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const todayDate = dayjs().format();
  const data = await fetchEventData(todayDate);
  const featuredEvents = await fetchFeaturedEvents(todayDate);
  const dataTuples = getDataTuples(data, todayDate);
  return {
    props: {
      initialData: dataTuples,
      featuredEvents,
    },
  };
};

export default Index;
