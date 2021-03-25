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

const TimeZoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 15px;
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    justify-content: center;
  }
`;

const TimeZoneText = styled.p`
  font-style: italic;
  font-size: 0.8em;
`;

interface EventTuplesProps {
  dataTuples: [string, EventDataTypes[]][];
  isIos: boolean;
}

export const EventList = ({ dataTuples, isIos }: EventTuplesProps): JSX.Element => {
  if (dataTuples.length < 1) {
    return (
      <Container>
        <ListContainer>
          <ChangeWeekButtons />
          No Events This Week
        </ListContainer>
      </Container>

    );
  }

  return (
    <Container id="events">
      <ListContainer>
        <TimeZoneWrapper>
          <TimeZoneText>
            All times are display in your time zone:
            {' '}
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </TimeZoneText>
        </TimeZoneWrapper>
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
};
