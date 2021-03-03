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
  data: any;
}

export const EventsOnDate = ({ data } : EventsOnDateProps) => (
  <Container>
    <DateWrapper>
      <DateHeading>
        Mon, Feb 22 2021
      </DateHeading>
    </DateWrapper>
    <Event data={data} />
    <Event data={data} />
    <Event data={data} />
    <Event data={data} />
  </Container>
);
