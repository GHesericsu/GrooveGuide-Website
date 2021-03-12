import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchEventData } from '../../lib/fetcher';
import { ChangeWeekButtons } from '../../src/components/ChangeWeekButtons';
import { Carousel } from '../../src/components/PhotoCarousel/Carousel';
import { EventList } from '../../src/components/LiveStreamList/EventList';
import { getDataTuples } from '../../lib/dataHelper';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

interface EventsOnWeekProps {
  data: any;
}

const EventsOnWeek = ({ data }: EventsOnWeekProps): JSX.Element => {
  const router = useRouter();
  console.log(router);
  const currentDate = router.asPath.slice(6).toString();

  console.log('current date', currentDate, typeof currentDate);

  if (!data) {
    return (
      <div>No Events Yet</div>
    );
  }

  console.log('RENDER');

  return (
    <>
      <Head>
        <title>🔥 GrooveGuide.live 🔥 Techno & House Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <Carousel />
        <ChangeWeekButtons currentDate={currentDate} />
        <EventList dataTuples={data} />
        <ChangeWeekButtons currentDate={currentDate} />
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
  const dataTuples = getDataTuples(data, date);
  console.log(dataTuples);

  return {
    props: {
      data: dataTuples,
    },
  };
};
