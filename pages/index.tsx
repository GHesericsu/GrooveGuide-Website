import Head from 'next/head';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Hello = styled.h1`
  color: red;
  font-size: 50px;
  border: 1px solid black;
  top: 100px;
  position: absolute;
`;

const Box = styled.div`
  border: 1px solid black;

`

export const Index = () => {
  return (
    <>
      <div>
        <Head>
          <title>DJ Live Streams</title>
          <meta name="description" content="DJ Live Streams" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Hello>DJ Live Streams</Hello>
      </div>
    </>
  );
};

export default Index;
