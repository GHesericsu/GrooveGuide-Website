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
  flex-wrap: nowrap;
`;

const SiteLogoWrapper = styled.div`
  width: 40%;
  height: 100%;
  margin: auto;
`;

const SiteLogo = styled.h1`
  margin: auto;
  ::before {
    content: '💃';
  }

  ::after {
    content: '🕺';
  }
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

  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 50px;
  }
`;

const SiteTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const SiteTitle = styled.h1`
  font-size: 25px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Emojis = styled.p`
  margin: 10px;
  word-spacing: 30px;
  padding-left: 30px;
`;

export const Header = () => (
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
        <Emojis>❤️   🙌   🎉   🎊   🥳   👯‍♂️   👯‍♀️   🙌   ❤️</Emojis>
      </SiteTitleWrapper>
    </HeaderContainer>
  </Container>
);
