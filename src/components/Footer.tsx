import Link from 'next/link';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/simple-icons';
import { Instagram, Twitter } from '@styled-icons/fa-brands';

import { LinkText } from '../utils/styles';

const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const IconsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const iconHover = `&:hover {
  transition: 0.2s;
  transform: rotate(5deg) scale(1.3);
  cursor: pointer;
  color: #C71E1E;
}`;

const FacebookIcon = styled(Facebook)`
  color: #C0C0C0;
  margin: 7px;
  ${iconHover}
`;

const InstagramIcon = styled(Instagram)`
  color: #C0C0C0;
  margin: 7px;
  ${iconHover}
`;

const TwitterIcon = styled(Twitter)`
  color: #C0C0C0;
  margin: 7px;
  ${iconHover}
`;

const FooterTextWrapper = styled.div`
  margin-top: 10px;
  max-height: 20px;
`;

const ImageLink = styled.a`

`;

export const Footer = (): JSX.Element => (
  <Wrapper>
    <IconsWrapper>
      <ImageLink href="https://www.facebook.com/grooveguidelive" target="_blank"><FacebookIcon size="32" /></ImageLink>
      <ImageLink href="https://www.instagram.com/grooveguide.live" target="_blank"><InstagramIcon size="34" /></ImageLink>
      <ImageLink href="https://twitter.com/grooveguidelive" target="_blank"><TwitterIcon size="32" /></ImageLink>
    </IconsWrapper>
    <FooterTextWrapper>
      <Link href="/about-us" as="/about-us" passHref><LinkText title="about us">About Us</LinkText></Link>
      {' | '}
      <Link href="/contact" as="/contact" passHref><LinkText title="contact us">Contact Us</LinkText></Link>
    </FooterTextWrapper>
  </Wrapper>
);
