import Link from 'next/link';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/simple-icons';
import { Instagram, Twitter } from '@styled-icons/fa-brands';

const Wrapper = styled.div`
  border: 1px solid blue;
  min-height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
`
const IconsWrapper = styled.div`
  height: 32px;
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const Footer = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Facebook size='32' /> 
        <Instagram size='32' />
        <Twitter size='32' />
      </IconsWrapper>
    </Wrapper>
  )
}