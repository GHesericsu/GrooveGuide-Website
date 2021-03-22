import styled from 'styled-components';
import { EventsOnDate } from './EventsOnDate';
import { ChangeWeekButtons } from '../ChangeWeekButtons';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 50px auto;

`;

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background: #1B1717;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 10px;
  }
`;

interface EventDataTypes {
  _id: string;
  name: string;
  artist: { name: string }[];
  endTime: string;
  startTime: string;
  imageUrl: string;
  information: any[];
  isFeatured: boolean;
  liveStreamUrl: string;
  location: string;
  organizations: string[];
  slug: string;
}

interface EventProps {
  dataTuples: [string, EventDataTypes][];
}

export const EventList = ({ dataTuples }: EventProps): JSX.Element => (
  <Container>
    <ListContainer>
      <ChangeWeekButtons />
      {dataTuples && dataTuples.map((el: any) => {
        const date = el[0];
        const events = el[1];
        return (
          <EventsOnDate date={date} events={events} key={date} />
        );
      })}
      <ChangeWeekButtons />
    </ListContainer>
  </Container>
);
