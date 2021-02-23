import Head from 'next/head';
import styled from 'styled-components';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { EventList } from '../src/components/LiveStreamList/EventList';

const Wrapper = styled.div`
  border: 1px solid #00ff15;
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
    <Wrapper>
      <Carousel />
      <EventList />
    </Wrapper>
  </>
);

export default Index;
