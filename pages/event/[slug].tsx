import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ShareIcon, CalendarIcon } from '../../src/components/LiveStreamList/Event';
import { fetchEventDetails, fetchEventSlugs } from '../../lib/fetcher';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const TopAndBottomContainer = styled.div`
  width: 95%;
  background-color: #1B1717;
  border-radius: 15px;
  display: flex;
  flex-flow: column;
  padding: 0px 20px;
`;

const TopContainer = styled.div`
  border-radius: 15px;
  background-color: #282828;
  height: 130px;
  margin: 20px 0px;
  box-shadow: 3px 3px 3px #070606;
`;

const BottomContainer = styled.div`
  /* border: 1px solid green; */
  border-radius: 15px;
  background-color: #282828;
  min-height: 500px;
  margin: 20px 0px;
  box-shadow: 3px 3px 3px #070606;
  display: flex;
  justify-content: center;
`;

const EventInfoWrapper = styled.div`
  width: 100%;
  padding: 15px 30px;
`

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
`;

const HeaderLeftWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

`;

const EventName = styled.h3`
  color: #C71E1E;
`;

const DateTime = styled.p`
`;

const HeaderRightWrapper = styled.div`
  width: 10%;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CalendarIconWithMargin = styled(CalendarIcon)`
  margin-bottom: 5px;
`

interface EventDetailProps {
  event: any;
}

const EventDetail = ({ event }: EventDetailProps) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log('event', event);

  return (
    <>
      <Head>
        <title>
          {event.name && event.name}
          -
          {event.startTime && event.startTime.slice(5, 10)}
        </title>
        <meta name="description" content={`Get updated live stream information on ${event.name}`} />
        <meta name="keywords" content="techno, house, live streams, dj" />
      </Head>
      <Container>
        <TopAndBottomContainer>
          <TopContainer>
            <HeaderWrapper>
              <HeaderLeftWrapper>
                <EventName>{event.name}</EventName>
                <DateTime>
                  <time>{`${dayjs(event.startTime).format('dddd, MMM DD, YYYY HH:mm')}`}</time>
                  <br />
                  {'to'}
                  <br />
                  {''}
                  <time>{event.endTime && dayjs(event.endTime).format('dddd, MMM-DD, YYYY HH:mm')}</time>
                </DateTime>
              </HeaderLeftWrapper>
              <HeaderRightWrapper>
                <IconsWrapper>
                  <CalendarIconWithMargin title="Add to your calendar" size="40px" />
                  <ShareIcon title="Share this page" size="38px" />
                </IconsWrapper>
              </HeaderRightWrapper>
            </HeaderWrapper>
          </TopContainer>
          <BottomContainer>
            <EventInfoWrapper>
            Danny Tenaglia has been into -- and influencing -- dance music before the genre had really even been fully defined. Growing up in Williamsburg, Brooklyn, in the '60s and '70s, Tenaglia absorbed the sounds and styles of his diverse neighborhood and cultivated a love of rummaging through records as a child into a career that is now well into its fourth decade.

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
  const paths = response.map((event: any) => (
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
