import styled from 'styled-components';
import { EventsOnDate } from './EventsOnDate';
 
const Container = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 25px auto;
`;

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background: #1B1717;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

interface EventProps {
  dataTuples: any;
}

export const EventList = ({ dataTuples }: EventProps) => (
  <Container>
    <ListContainer>
      {dataTuples && dataTuples.map((el: any) => {
        const date = el[0];
        const events = el[1];
        return (
          <EventsOnDate date={date} events={events} />
        );
      })}
    </ListContainer>
  </Container>
);
