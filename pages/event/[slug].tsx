import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import { LinkText } from '../../src/utils/styles';
import { LinkIcon, ShareIcon, CalendarIcon } from '../../src/components/LiveStreamList/Event';
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
  height: auto;
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
`;

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
  display: flex;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CalendarIconWithMargin = styled(CalendarIcon)`
  margin-bottom: 10px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  text-align: center;
`;

interface EventDetailProps {
  event: any;
}

const EventDetail = ({ event }: EventDetailProps): JSX.Element => {
  const {
    name, startTime, endTime, organization, location, liveStreamUrl, isFeatured, information, imageUrl,
  } = event;

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
                  <CalendarIconWithMargin title="Add to your calendar" size="40px" />
                  <ShareIcon title="Share this page" size="38px" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dui finibus, rutrum massa vitae, aliquet mauris. Curabitur faucibus accumsan nisi, ac congue sapien luctus ut. Praesent pulvinar dignissim risus, ut sollicitudin massa aliquet a. Donec et lacus consectetur lectus pharetra condimentum. Nulla bibendum id erat et fermentum. Suspendisse faucibus aliquam nisi eget aliquet. Etiam condimentum scelerisque odio sit amet viverra. Pellentesque molestie finibus sagittis. Nulla efficitur turpis nisi, sed dapibus libero gravida vulputate. Vivamus sit amet interdum purus. Fusce feugiat tristique porta.

              Aliquam congue, odio blandit maximus congue, diam lorem ultrices est, ut gravida ex velit sit amet mi. Nullam vel orci velit. Proin venenatis viverra metus eget volutpat. Nunc in aliquam purus. Nullam et elit non mauris aliquam dictum id non erat. Vestibulum elit libero, auctor quis arcu vel, gravida iaculis erat. Sed non interdum risus, et rutrum sapien. Donec convallis erat sit amet ante faucibus egestas. Pellentesque tempus arcu ac nisi vehicula pellentesque. Suspendisse rutrum ornare urna, quis egestas ex. Donec id eros aliquam, iaculis ante aliquet, bibendum nisi. Proin sapien justo, lobortis id ante a, vulputate vulputate ex. Donec lorem urna, convallis eget dolor id, convallis consequat lectus.

              Vestibulum tincidunt rutrum ipsum, sed semper mi iaculis in. Sed cursus, augue quis viverra ornare, arcu eros interdum mauris, id efficitur justo orci ac arcu. Sed ut purus ex. Vivamus elementum lorem non augue dictum volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin in aliquet lorem. Integer commodo, sapien dictum convallis bibendum, diam lorem volutpat diam, quis pulvinar erat orci id massa. Fusce risus massa, suscipit et sollicitudin sit amet, congue feugiat ex. Quisque eu euismod tellus. Nullam tristique purus sed ante feugiat, euismod luctus nibh vestibulum. Donec interdum volutpat lorem ut blandit. Proin commodo eget arcu eget molestie. Suspendisse efficitur id dolor at suscipit. Praesent et nulla bibendum, vehicula enim sed, viverra leo.

              Donec maximus convallis pulvinar. Suspendisse vel hendrerit metus. Fusce efficitur sem non tortor faucibus lacinia. Nunc pretium metus a ligula molestie, et gravida ante varius. Etiam aliquam sapien ultrices mattis vestibulum. Sed sollicitudin ornare mollis. Duis gravida, urna et convallis lacinia, risus risus porttitor ante, at efficitur sapien est nec magna. Vestibulum in nibh et tortor condimentum bibendum sit amet nec leo.

              Proin euismod cursus euismod. Mauris pretium vel odio vel faucibus. Nam ornare mauris id erat feugiat placerat. Morbi nec interdum nisi, eu dignissim justo. Donec diam felis, semper eu rutrum vitae, pellentesque vitae metus. Vestibulum convallis mattis nisi quis pharetra. Duis euismod quam lacus, eget elementum sapien ultrices sit amet. Integer velit mauris, pretium ut ipsum sed, euismod dignissim nibh. Vivamus sed mi venenatis, sagittis elit in, eleifend ipsum. Duis lacus mauris, egestas eget suscipit ac, faucibus eu mauris. Nulla malesuada volutpat ornare. Aliquam erat volutpat. Etiam in felis aliquam, ultrices dui non, imperdiet sem. Nullam sit amet nisl maximus elit dapibus sodales eu sed mauris.

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
