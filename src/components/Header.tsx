import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
`

const HeaderWrapper = styled.div`
  width: 80%;
  border: 1px solid blue;
  margin: auto;
`
const SiteTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`

export const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <SiteTitle>
          Techno & House Live Stream Guide
        </SiteTitle>
      </HeaderWrapper>
    </Wrapper>
  )
}