import styled from 'styled-components';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  min-width: 900px;
  border: 1px solid pink;
  padding: 4px;
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