import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { isIOS } from 'react-device-detect';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import { LinkText } from '../../src/utils/styles';
import { LinkIcon } from '../../src/components/LiveStreamList/Event';
import { fetchEventDetails, fetchEventSlugs } from '../../lib/fetcher';
import { EventDataTypes } from '../../lib/types/eventTypes';
import { AddEventToCal } from '../../src/components/LiveStreamList/AddEventToCal';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const TopAndBottomContainer = styled.div`
  width: 100%;
  background-color: #1B1717;
  border-radius: 15px;
  display: flex;
  flex-flow: column;
  padding: 0px 20px;
  @media only screen and (max-width: 480px) {
    padding: 0px 5px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0px 5px;
  }
`;

const TopContainer = styled.div`
  border-radius: 15px;
  background-color: #282828;
  height: auto;
  margin: 20px 0px;
  box-shadow: 3px 3px 3px #070606;
`;

const BottomContainer = styled.div`
  border-radius: 15px;
  background-color: #282828;
  min-height: 500px;
  margin: 20px 0px;
  box-shadow: 3px 3px 3px #070606;
  display: flex;
  flex-direction: column;
`;

const EventInfoWrapper = styled.div`
  width: 100%;
  padding: 20px 65px 30px 65px;
  font: inherit;
  list-style-position: inside;
  a {
    color: inherit;
    display:inline-block;
    text-decoration: underline;
    text-underline-position: under;
    &:hover {
      transition: 0.2s;
      transform: scale(1.01);
      cursor: pointer;
      color: #C71E1E;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 12px 8px 30px 8px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 12px 8px 30px 8px;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  flex: 0 0 90%;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

`;

const EventName = styled.h3`
  color: #C71E1E;
`;

const OrganizationsNames = styled.p`

`;

const DateTime = styled.p`
`;

const HeaderRightWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 10%;
`;

const IconsWrapper = styled.div`
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  text-align: center;
`;

interface EventDetailProps {
  event: EventDataTypes;
}

const EventDetail = ({ event }: EventDetailProps): JSX.Element => {
  const {
    name, startTime, endTime, organizations, liveStreamUrl, information, imageUrl,
  } = event;

  const [ios, setIos] = useState(false);
  useEffect(() => {
    if (isIOS === true) {
      setIos(isIOS);
    }
  }, []);

  if (!event) {
    return (
      <div>No event detail yet</div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {name && name}
          -
          {startTime && startTime.slice(5, 10)}
        </title>
        <meta name="description" content={`Get updated live stream information on ${name}`} />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <TopAndBottomContainer>
          <TopContainer>
            <HeaderWrapper>
              <HeaderLeftWrapper>
                <EventName>{name}</EventName>
                <OrganizationsNames>
                  {'By '}
                  {organizations && organizations.join(', ')}
                </OrganizationsNames>
                <DateTime>
                  <time dateTime={startTime}>{`${dayjs(startTime).format('dddd, MMM DD, YYYY HH:mm')}`}</time>
                  {endTime && (
                  <>
                    <br />
                    {' '}
                    to
                    {' '}
                    <br />
                  </>
                  ) }
                  {endTime && <time dateTime={endTime}>{dayjs(endTime).format('dddd, MMM-DD, YYYY HH:mm')}</time>}
                </DateTime>
                <p>
                  <LinkIcon size="20" />
                  <LinkText href={liveStreamUrl} target="_blank">{liveStreamUrl}</LinkText>
                </p>
              </HeaderLeftWrapper>
              <HeaderRightWrapper>
                <IconsWrapper>
                  <AddEventToCal event={event} isIos={ios} />
                </IconsWrapper>
              </HeaderRightWrapper>
            </HeaderWrapper>
          </TopContainer>
          <BottomContainer>
            <ImageWrapper>
              {imageUrl && <Image src={imageUrl} width={800} height={800} />}
            </ImageWrapper>
            <EventInfoWrapper>
              {information && <BlockContent blocks={information} />}
            </EventInfoWrapper>
          </BottomContainer>
        </TopAndBottomContainer>
      </Container>
    </>
  );
};

export default EventDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchEventSlugs();
  const paths = response.map((event: { slug: string }) => (
    {
      params: {
        slug: event.slug,
      },
    }
  ));
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
