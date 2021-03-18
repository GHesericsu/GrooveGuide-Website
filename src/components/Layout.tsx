import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 4px, 4px;
  box-sizing: border-box;

  @media only screen and (max-width: 480px) {
    max-width: 400px;
    font-size: 16px;
  }

  @media only screen and (min-width: 480px) {
    max-width: 470px;

  }
  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 940px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

interface LayoutProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}

export const Layout = ({ children } : LayoutProps): JSX.Element => (
  <Wrapper>
    <Header />
    <Nav />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);
