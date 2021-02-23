import styled from 'styled-components';
import { Events } from './Events';
 
const Container = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background: #1B1717;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const EventList = () => (
  <Container>
    <ListContainer>
      <Events />
      <Events />
    </ListContainer>
  </Container>
);
