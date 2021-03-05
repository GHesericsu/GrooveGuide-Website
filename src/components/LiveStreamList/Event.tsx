import styled from 'styled-components';
import Image from 'next/image';
import { Link, CalendarPlus } from '@styled-icons/boxicons-regular';

import { ShareBoxed } from '@styled-icons/open-iconic';
import dayjs from 'dayjs';
import { LinkText } from '../../utils/styles';

const Container = styled.div`
  width: 100%;
  height: 160px;
  background: #282828;
  border-radius: 15px;
  padding: 8px 20px;
  margin: 8px 0px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EventInfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
`;

const DateTimeContainer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding-left: 10px;
`;

const FlyerContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

const IconsContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`;

const EventName = styled.h3`

`;

const CalendarIcon = styled(CalendarPlus)`
  margin: auto;
  
  &:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
  }
`;

const ShareIcon = styled(ShareBoxed)`
  margin: auto;
  padding-left: 7px;
  &:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
  }
`;

const ArtistNameWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0px;
`;

const ArtistName = styled.span`
  padding-right: 10px;
  
`;

const LinkIcon = styled(Link)`
  color: #C71E1E;
  margin: 7px;
`;

interface EventProps {
  event: any;
}

export const Event = ({ event }: EventProps) => {
  const {
    name, artists, liveStreamUrl, startTime, endTime, imageUrl,
  } = event;

  return (
    <Container>
      <ContentContainer>
        <EventInfoContainer>
          <EventName>
            {name}
          </EventName>
          <ArtistNameWrapper>
            {artists && artists.map((el: any) => (
              <ArtistName key={el.name}>
                {el.name}
                {' '}
                |
              </ArtistName>
            ))}
          </ArtistNameWrapper>
          <p>
            <LinkIcon size="20" />
            <LinkText href={liveStreamUrl} target="_blank">{liveStreamUrl}</LinkText>
          </p>
        </EventInfoContainer>
        <DateTimeContainer>
          <p>Start</p>
          <p>{dayjs(startTime).format('MMM DD - HH:mm')}</p>
          <br />
          <p>End</p>
          <p>{endTime && dayjs(endTime).format('MMM DD - HH:mm')}</p>
        </DateTimeContainer>
        <FlyerContainer>
          {imageUrl && <Image src={imageUrl} alt={name} width={140} height={140} />}
        </FlyerContainer>
        <IconsContainer>
          <CalendarIcon title="Add to your calendar" size="45px" />
          <ShareIcon title="Share this page" size="43px" />
        </IconsContainer>
      </ContentContainer>
    </Container>
  );
};
