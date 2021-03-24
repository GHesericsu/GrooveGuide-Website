import styled from 'styled-components';
import { EventsOnDate } from './EventsOnDate';
import { ChangeWeekButtons } from '../ChangeWeekButtons';
import { EventDataTypes } from '../../../lib/types/eventTypes';

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

interface EventTuplesProps {
  dataTuples: [string, EventDataTypes[]][];
  isIos: boolean;
}

export const EventList = ({ dataTuples, isIos }: EventTuplesProps): JSX.Element => (
  <Container>
    <ListContainer>
      <ChangeWeekButtons />
      {dataTuples && dataTuples.map((el: [string, EventDataTypes[]]) => {
        const date = el[0];
        const events = el[1];
        return (
          <EventsOnDate date={date} events={events} key={date} isIos={isIos} />
        );
      })}
      <ChangeWeekButtons />
    </ListContainer>
  </Container>
);
