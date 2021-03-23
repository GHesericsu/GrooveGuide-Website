import styled from 'styled-components';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link, CalendarPlus, LinkExternal } from '@styled-icons/boxicons-regular';
import { ShareBoxed } from '@styled-icons/open-iconic';
import dayjs from 'dayjs';
import { LinkText } from '../../utils/styles';
import { AddEventToCal } from './AddEventToCal';
import { EventDataTypes } from '../../../lib/types/eventTypes';

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #282828;
  border-radius: 15px;
  padding: 8px 20px;
  margin: 12px 0px;
  box-shadow: 3px 3px 3px #070606;
  @media only screen and (max-width: 480px) {
    padding: 8px 10px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 8px 8px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px)  {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventInfoContainer = styled.div`
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
`;

const DateTimeContainer = styled.div`
  flex: 0 0 35%;
  display: flex;
  padding-bottom: 20px;
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  padding-left: 10px;
  white-space: pre-wrap;
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const FlyerContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
`;

const IconsContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
`;

const EventName = styled.h3`

`;

export const CalendarIcon = styled(CalendarPlus)`
  margin: auto;
  filter: drop-shadow(3px 3px 3px #070606);
  
  &:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
  }
`;

export const ShareIcon = styled(ShareBoxed)`
  margin: auto;
  padding-left: 7px;
  filter: drop-shadow(3px 3px 3px #070606);
  &:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
  }
`;

const ArtistNameWrapper = styled.p`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0px;
`;

const ArtistName = styled.span`
  + span::before {
    white-space: pre;
    content: ",  ";
  } 
`;

const TimeFlyerIconContainer = styled.div`
  display: flex;
  flex: 0 0 45%;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const LinkIcon = styled(Link)`
  color: #C71E1E;
  margin-right: 4px;
  padding-top: 2px;
`;

const LinkWrapper = styled.div`
  text-align: left;
  word-wrap: break-word;
`;

const LinkLine = styled.p`
  display: flex;
`;

interface EventProps {
  event: EventDataTypes;
  isIos: boolean;
}

export const Event = ({ event, isIos }: EventProps): JSX.Element => {
  const {
    name, artists, liveStreamUrl, startTime, endTime, imageUrl, slug,
  } = event;

  return (
    <Container>
      <ContentContainer>
        <EventInfoContainer>
          <EventName>
            <NextLink href={`/event/${encodeURIComponent(slug)}`} passHref><LinkText title={name}>{name}</LinkText></NextLink>
          </EventName>
          <ArtistNameWrapper>
            {artists && artists.map((el: { name: string }) => (
              <ArtistName key={el.name}>
                {el.name}
              </ArtistName>
            ))}
          </ArtistNameWrapper>
          <LinkWrapper>
            <LinkLine>
              <LinkText href={liveStreamUrl} target="_blank" rel="noopener noreferrer">
                {liveStreamUrl}
                <LinkExternal size={20} />
              </LinkText>
            </LinkLine>
          </LinkWrapper>
        </EventInfoContainer>
        <TimeFlyerIconContainer>
          <FlyerContainer>
            {imageUrl && <Image src={imageUrl} alt={name} width={140} height={140} />}
          </FlyerContainer>
          <DateTimeContainer>
            <p>From</p>
            <p><time dateTime={startTime}>{dayjs(startTime).format('MMM DD - HH:mm')}</time></p>
            <p>Until</p>
            <p><time dateTime={endTime}>{endTime && dayjs(endTime).format('MMM DD - HH:mm')}</time></p>
          </DateTimeContainer>
          <IconsContainer>
            {event && <AddEventToCal event={event} isIos={isIos} />}
          </IconsContainer>
        </TimeFlyerIconContainer>
      </ContentContainer>
    </Container>
  );
};
