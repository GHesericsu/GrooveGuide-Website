import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps, GetStaticPaths } from 'next';

import { fetchEventDetails, fetchEventSlugs } from '../../lib/fetcher';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface EventDetailProps {
  event: any;
}

export const EventDetail = ({ event }: EventDetailProps) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>
          {event.name}
          -
          {event.startTime.slice(5, 10)}
        </title>
        <meta name="description" content={`Get updated live stream information on ${event.name}`} />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        slug:
        {' '}
        {slug}
        {' '}
        {event.name}
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
