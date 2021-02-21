import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';


const Wrapper = styled.div`
  border: 1px solid #00ff15;
  min-height: 600px;
  height: auto;
  width: 100%;
`

export const Index = () => {
  return (
    <>
      <Head>
        <title>DJ Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      
      </Head>
      <Wrapper>
        <Carousel />
        This is the main body
      </Wrapper>
    </>
  );
};

export default Index;
