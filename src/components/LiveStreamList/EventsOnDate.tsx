/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Event } from './Event';
import { EventDataTypes } from '../../../lib/types/eventTypes';

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

const DateHeading = styled.h3`
  color: #C71E1E;
`;

interface EventsOnDateProps {
  date: string;
  events: EventDataTypes[];
  isIos: boolean;
}

export const EventsOnDate = ({ date, events, isIos } : EventsOnDateProps): JSX.Element => {
  return (
    <Container>
      <DateWrapper>
        <DateHeading>
          <time dateTime={date}>{dayjs(date).format('dddd, MMM DD')}</time>
          {dayjs().format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD') && ' - Today'}
        </DateHeading>
      </DateWrapper>
      {events[0] && events.map((el: any) => (
        <Event event={el} key={el._id} isIos={isIos} />
      ))}
    </Container>
  );
};
