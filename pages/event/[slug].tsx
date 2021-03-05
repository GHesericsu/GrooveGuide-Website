import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps, GetStaticPaths } from 'next';
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;



const EventDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Container>
        slug:
        {' '}
        {slug}
      </Container>
    </>
  );
};

export const getStaticPaths = (): GetStaticPaths => {

  

}