import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 88%;
  display: flex;
  justify-content: center;
`
const ImageWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`

export const Carousel = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image priority src="/flyer1.jpg"
            alt="flyer1"
            width={350}
            height={350}
          />
          <Image priority src="/flyer2.jpg"
            alt="flyer2"
            width={350}
            height={350}
          />
          <Image priority src="/flyer3.jpg"
            alt="flyer3"
            width={350}
            height={350}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>    
  )
};