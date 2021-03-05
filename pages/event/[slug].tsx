import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons';

import { fetchEventDetails, fetchEventSlugs } from '../../lib/fetcher';


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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchEventSlugs();
  console.log('res', response);
  const paths = response.map((event: any) => (
    {
      params: {
        slug: event.slug,
      },
    }
  ));
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
};

type Props = {
  event: {
    slug: string
  }
};

interface Params extends ParsedUrlQuery {
  slug: string,
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params as Params;
  const response = await fetchEventDetails(slug);

  return {
    props: {
      event: response,
    },
  };
};
