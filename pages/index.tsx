import Head from 'next/head';
import styled from 'styled-components';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

export const Index = () => (
  <>
    <Head>
      <title>DJ Live Streams</title>
      <meta name="description" content="DJ Live Streams" />
      <meta name="keywords" content="techno, house, live streams, dj" />
    </Head>
    <Container>
      <Carousel />
      <EventList />
    </Container>
  </>
);

export default Index;
