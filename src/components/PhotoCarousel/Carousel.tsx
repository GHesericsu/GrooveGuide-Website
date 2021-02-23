import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 25px auto;
`;

const Wrapper = styled.div`
  width: 88%;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

export const Carousel = () => (
  <Container>
    <Wrapper>
      <ImageWrapper>
        <StyledImage
          priority
          src="/flyer1.jpg"
          alt="flyer1"
          width={400}
          height={400}
        />
        <StyledImage
          priority
          src="/flyer2.jpg"
          alt="flyer2"
          width={400}
          height={400}
        />
        <StyledImage
          priority
          src="/flyer3.jpg"
          alt="flyer3"
          width={400}
          height={400}
        />
      </ImageWrapper>
    </Wrapper>
  </Container>
);
