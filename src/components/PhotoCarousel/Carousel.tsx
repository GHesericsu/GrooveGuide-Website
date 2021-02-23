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

const StyledImage = styled(Image)`
  &:hover {
    transition: 0.1s;
    transform: scale(1.2);
    cursor: pointer;
    min-width: 500px;
  }
`

export const Carousel = () => {



  
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <StyledImage priority src="/flyer1.jpg"
            alt="flyer1"
            width={350}
            height={350}
          />
          <StyledImage priority src="/flyer2.jpg"
            alt="flyer2"
            width={350}
            height={350}
          />
          <StyledImage priority src="/flyer3.jpg"
            alt="flyer3"
            width={350}
            height={350}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>    
  )
};