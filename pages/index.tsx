import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';



const Wrapper = styled.div`
  border: 1px solid #00ff15;
  min-height: 1000px;
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
        This is the main body
      </Wrapper>
    </>
  );
};

export default Index;
