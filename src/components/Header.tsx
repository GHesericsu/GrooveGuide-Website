import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  border: 1px solid blue;
  margin: 5px, 5px;
  padding: 5px, 5px;
`;

const HeaderWrapper = styled.div`
  width: 95%;
  border: 1px solid blue;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const SiteTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const SiteTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: auto;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 26px;
  }
`;

const LogoWrapper = styled.div`

`

const LogoImage = styled(Image)`
`;

export const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>

        <Link href='/'> 
        <a>
          <LogoImage 
            priority
            width={128}
            height={128}
            src='/disco-ball-128.png'
            alt='disco ball'
          />
        </a>
        </Link>

        <SiteTitleWrapper>
          <SiteTitle>
            <Link href='/'>  
            <a>Techno & House Live Stream Guide</a>
            </Link>
          </SiteTitle> 
        </SiteTitleWrapper>

      </HeaderWrapper>
    </Wrapper>
  )
};