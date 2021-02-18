import Head from 'next/head';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const Wrapper = styled.div`
  border: 1px solid #00ff15;
  min-height: 1000px;
  width: 1200px;
`

export const Index = () => {
  return (
    <>
      <Head>
        <title>DJ Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        {/* <link rel='icon' type="image/x-icon" href='/favicon.ico' />  */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
