/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0px;
  top: 15px;
  margin: 5px, 5px;
  padding: 5px, 5px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
  
  }
  @media only screen and (min-width: 1200px) {
    
  }
`;

const SiteLogoWrapper = styled.div`
  flex: 0 0 40%;
  height: 100%;
  margin: auto;
  text-align: center;
  min-width: 325
`;

const SiteLogo = styled.h1`
  /* margin: auto; */
`;

const SiteLogoLink = styled.a`
  font-family: 'Thousanddeep-Regular';
  font-size: 70px;
  font-weight: 10;
  color: inherit;
  display:inline-block;
  position: relative;
  top: 7px;
  
  &:hover {
    transition: 0.2s;
    transform: scale(1.05);     
    cursor: pointer;
    color: #C71E1E;
    text-decoration: none;
  }

  &:focus {
    outline: 1px solid var(--red);
    box-shadow: 0 0 0 1px var(--red);
    color: #C71E1E;
  }

`;

const SiteTitleWrapper = styled.div`
  flex: 0 0 60%;
  height: 100%;
  margin: auto;
  padding: 0px 30px;
  text-align: center;
`;

const SiteTitle = styled.h2`
  font-size: 1.2em;
`;

export const Header = (): JSX.Element => (
  <Container>
    <HeaderContainer>
      <SiteLogoWrapper>
        <SiteLogo>
          <Link href="/">
            <SiteLogoLink>GrooveGuide</SiteLogoLink>
          </Link>
        </SiteLogo>
      </SiteLogoWrapper>
      <SiteTitleWrapper>
        <SiteTitle>
          We Curate All The 🔥 Techno & House Live Streams
        </SiteTitle>
      </SiteTitleWrapper>
    </HeaderContainer>
  </Container>
);
