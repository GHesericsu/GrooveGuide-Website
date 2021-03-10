/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { Event } from './Event';
import dayjs from 'dayjs';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2px;
  margin-bottom: 15px;
`;
const DateWrapper = styled.div`
  width: 100%;
  margin: 0px 5px;
`;

const DateHeading = styled.h2`
  color: #C71E1E;
  /* border-bottom: 1px solid #C71E1E; */
  /* text-decoration: underline; */
  /* text-underline-position: under; */
`;

interface EventsOnDateProps {
  date: string;
  events: any[];
}

export const EventsOnDate = ({ date, events } : EventsOnDateProps) => {
  console.log('events on dates success');
  return (
    <Container>
      <DateWrapper>
        <DateHeading>
          <time dateTime={date}>{dayjs(date).format('dddd, MMM DD')}</time>
          {dayjs().format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD') && ' - Today'}
        </DateHeading>
      </DateWrapper>
      {events[0] && events.map((el: any) => (
        <Event event={el} key={el._id} />
      ))}
    </Container>
  );
};
