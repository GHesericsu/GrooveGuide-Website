import styled from 'styled-components';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  children: React.ReactNode;
  home: Boolean;
}

export const Layout = ({ children, home } : LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}