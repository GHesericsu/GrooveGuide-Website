import styled from 'styled-components';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
  padding: 4px, 4px;

  @media only screen and (min-width: 544px) {
    max-width: 576px;
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
`

interface LayoutProps {
  children: React.ReactNode;
  home: Boolean;
}

export const Layout = ({ children, home } : LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}