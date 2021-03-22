import styled from 'styled-components';
import { CalendarPlus } from '@styled-icons/boxicons-regular';
import { getGoogleCalLink, downloadIcs } from '../../../lib/generateCalLink';
import { EventDataTypes } from '../../../lib/types/eventTypes';

const AddCalLink = styled.a`
  color: inherit;
  margin: auto;
`;

export const CalendarIcon = styled(CalendarPlus)`
  margin: auto;
  filter: drop-shadow(3px 3px 3px #070606);
  
  &:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
  }
`;

interface AddEventProps {
  event: EventDataTypes;
  isIos: boolean;
}

export const AddEventToCal = ({ event, isIos }: AddEventProps): JSX.Element => {
  if (isIos) {
    return (
      <CalendarIcon
        title="Add to your apple calendar"
        size="40px"
        onClick={() => {
          downloadIcs(event);
        }}
      />
    );
  }
  return (
    <AddCalLink href={event && getGoogleCalLink(event)} target="_blank" rel="noopener noreferrer">
      <CalendarIcon
        title="Add to your calendar"
        size="40px"
      />
    </AddCalLink>
  );
};
