import styled from 'styled-components';
import Image from 'next/image'
import { CalendarPlus } from '@styled-icons/boxicons-regular';
import { ShareBoxed } from '@styled-icons/open-iconic';
import dayjs from 'dayjs';
import { LinkText } from '../../utils/styles';

const Container = styled.div`
  width: 100%;
  height: 160px;
  background: #282828;
  border-radius: 15px;
  padding: 8px 20px;
  margin: 10px 0px;
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


interface EventProps {
  data: any;
}

export const Event = ({ data }: EventProps) => {
  console.log('artists', data.artists);
  return (
    <Container>
      <ContentContainer>
        <EventInfoContainer>
          <EventName>
            {data.name}
          </EventName>
          <ArtistNameWrapper>
            {data.artists && data.artists.map((el: any) => (
              <ArtistName>
                {el.name}
                {' '}
                |
              </ArtistName>
            ))}
          </ArtistNameWrapper>
          <p><LinkText href={data.liveStreamUrl} target="_blank" >{data.liveStreamUrl}</LinkText></p>
        </EventInfoContainer>
        <DateTimeContainer>
          <p>Start</p>
          <p>{dayjs(data.startTime).format('MMM DD - HH:mm')}</p>
          <br />
          <p>End</p>
          <p>{dayjs(data.endTime).format('MMM DD - HH:mm')}</p>
        </DateTimeContainer>
        <FlyerContainer>
          img
          {/* <Image src={data.imageUrl} alt={data.name} width={100} height={100} /> */}
        </FlyerContainer>
        <IconsContainer>
          <CalendarIcon title="Add to your calendar" size="45px" />
          <ShareIcon title="Share this page" size="43px" />
        </IconsContainer>
      </ContentContainer>
    </Container>
  );
};
