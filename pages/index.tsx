import Head from 'next/head';
import { isIOS } from 'react-device-detect';
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
  dataTuples: [string, EventDataTypes[]][];
  featuredEvents: {
    name: string;
    imageUrl: string;
    slug: string;
  }[];
}

export const Index = ({ dataTuples, featuredEvents }: IndexProps): JSX.Element => {
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (isIOS === true) {
      setIos(isIOS);
    }
  }, []);

  if (!dataTuples) {
    return (
      <div>No Events Yet</div>
    );
  }

  return (
    <>
      <Head>
        <title>🔥 GrooveGuide.live 🔥 Techno & House Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <ImageCarousel featuredEvents={featuredEvents} />
        <EventList dataTuples={dataTuples} isIos={ios} />
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
      dataTuples,
      featuredEvents,
    },
  };
};

export default Index;
