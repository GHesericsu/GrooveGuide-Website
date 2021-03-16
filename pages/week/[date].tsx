import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchEventData, fetchFeaturedEvents } from '../../lib/fetcher';
import { ChangeWeekButtons } from '../../src/components/ChangeWeekButtons';
import { ImageCarousel } from '../../src/components/PhotoCarousel/Carousel';
import { EventList } from '../../src/components/LiveStreamList/EventList';
import { getDataTuples } from '../../lib/dataHelper';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface EventsOnWeekProps {
  data: any;
  featuredEvents: any;
}

const EventsOnWeek = ({ data, featuredEvents }: EventsOnWeekProps): JSX.Element => {
  const router = useRouter();
  const curDate: string = router.asPath.slice(6, 16) || dayjs().format('YYYY-MM-DD');

  if (!data) {
    return (
      <div>No Events Yet</div>
    );
  }

  console.log('RENDER');

  return (
    <>
      <Head>
        <title>
          Techno & House Live Streams - Week of
          {` ${curDate}`}
        </title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <ImageCarousel featuredEvents={featuredEvents} />
        <EventList dataTuples={data} />
      </Container>
    </>
  );
};

export default EventsOnWeek;

export const getStaticPaths: GetStaticPaths = async () => {
  const today = dayjs();
  const start = today.subtract(30, 'day');
  const paths = [];
  for (let i = 0; i < 90; i += 1) {
    const path = {
      params: {
        date: dayjs(start).add(i, 'day').format('YYYY-MM-DD'),
      },
    };
    paths.push(path);
  }

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  data: any[][];
};

interface Params extends ParsedUrlQuery {
  date: string,
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { date } = context.params as Params;
  console.log('DATE', date);
  const data = await fetchEventData(date);
  const featuredEvents = await fetchFeaturedEvents(dayjs().format());
  const dataTuples = getDataTuples(data, date);
  console.log('featured Events', featuredEvents);

  return {
    props: {
      data: dataTuples,
      featuredEvents,
    },
  };
};
