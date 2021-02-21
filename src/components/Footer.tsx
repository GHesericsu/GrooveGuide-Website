import Link from 'next/link';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/simple-icons';
import { Instagram, Twitter } from '@styled-icons/fa-brands';

const Wrapper = styled.div`
  border: 1px solid blue;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const IconsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const FacebookIcon = styled(Facebook)`
  color: #C0C0C0;
  margin: 7px;
  &:hover {
    transition: 0.1s;
    transform: rotate(5deg) scale(1.3);
    cursor: pointer;
    color: #C71E1E;
  }
`

const InstagramIcon = styled(Instagram)`
  color: #C0C0C0;
  margin: 7px;
  &:hover {
      transition: 0.1s;
      transform: rotate(5deg) scale(1.2);
      cursor: pointer;
      color: #C71E1E
  }
`

const FooterTextWrapper = styled.div`
  width:auto;
`

const TwitterIcon = styled(Twitter)`
  color: #C0C0C0;
  margin: 7px;
  &:hover {
      transition: 0.1s;
      transform: rotate(5deg) scale(1.2);
      cursor: pointer;
      color: #C71E1E;
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <FacebookIcon size='32' /> 
        <InstagramIcon size='34' />
        <TwitterIcon size='32' />
      </IconsWrapper>
      <FooterTextWrapper>
        <Link href="aboutUs"><a>Home</a></Link>
        {' | '}
        <Link href="contact"><a>Contact Us</a></Link>
      </FooterTextWrapper>
    </Wrapper>
  )
};