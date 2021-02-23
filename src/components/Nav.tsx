import styled from 'styled-components';
import { Search } from '@styled-icons/fa-solid';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px;
`;

const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
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

export const Nav = () => (
  <Container>
    <SearchWrapper>
      <SearchIcon title="Search" size="32" />
    </SearchWrapper>

  </Container>

);
