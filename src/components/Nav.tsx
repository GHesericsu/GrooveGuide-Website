import styled from 'styled-components';
import { Search } from '@styled-icons/fa-solid';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const CurrentPageWrapper = styled.div`
  width: 50%;
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
      { home ? 'Main' : 'Not Main'}
    </CurrentPageWrapper>

    <SearchWrapper>
      <SearchIcon size="32" />
    </SearchWrapper>

  </Container>

);
