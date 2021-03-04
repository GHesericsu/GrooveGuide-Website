import styled from 'styled-components';
import { Event } from './Event';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2px;
  
`;
const DateWrapper = styled.div`
  width: 100%;
  margin: 0px 5px;
`;

const DateHeading = styled.h2`
  color: #C71E1E;
  /* border-bottom: 1px solid #C71E1E; */
  text-decoration: underline;
  text-underline-position: under;
`;

interface EventsOnDateProps {
  date: string;
  events: any[];
}

export const EventsOnDate = ({ date, events } : EventsOnDateProps) => {
  console.log('date', date, 'events', events);
  return (
    <Container>
      <DateWrapper>
        <DateHeading>
          {date}
        </DateHeading>
      </DateWrapper>
      {events[0] && events.map((el: any) => (
        <Event event={el} />
      ))}
    </Container>
  )
};
