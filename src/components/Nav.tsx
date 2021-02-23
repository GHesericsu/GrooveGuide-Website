import styled from 'styled-components';
import { Search } from '@styled-icons/fa-solid';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid white;
`;

const CurrentPageWrapper = styled.div`
  width: 50%;
  border: 1px solid white;
`;
const SearchIcon = styled(Search)`
  color: #DCDCDC;
  margin: 7px;
  &:hover {
      transition: 0.1s;
      transform: scale(1.2);
      cursor: pointer;
  }
`;

interface NavProps {
  home: Boolean;
}

export const Nav = ({ home } : NavProps) => (
  <Container>

    <CurrentPageWrapper>
      { home ? 'Home' : 'Not Home'}
    </CurrentPageWrapper>

    <SearchWrapper>
      <SearchIcon size="32" />
    </SearchWrapper>

  </Container>

);
