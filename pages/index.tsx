import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { fetchEventData } from '../lib/fetcher';

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

export const Index = ({ initialData }: IndexProps) => {
  const [data, setData] = useState(initialData);

  return (
    <>
      <Head>
        <title>🔥 DJ Live Streams 🔥</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <Carousel />
        <EventList data={data} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await fetchEventData();
  console.log(initialData);

  return {
    props: {
      initialData,
    },
  };
};

export default Index;
