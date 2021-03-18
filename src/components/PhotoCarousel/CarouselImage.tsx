import styled from 'styled-components';
import Image from 'next/image';

const ImageWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

interface ImageProps {
  event: {
    imageUrl: string;
    name: string;
    slug: string;
  }
}

const CarouselImage = ({ event }: ImageProps): JSX.Element => {
  const imgTag = () => (
    <img
      src={`${event.imageUrl}?auto=format&h=400&w=400`}
      alt={event.name}
      width={400}
      height={400}
      key={event.name}
    />
  );

  return (
    <ImageWrapper>
      {/* <img
        src={`${event.imageUrl}?auto=format&h=400&w=400`}
        alt={event.name}
        width={400}
        height={400}
        key={event.name}
      /> */}
      <StyledImage
        priority
        src={`${event.imageUrl}?auto=format&h=400&w=400`}
        alt={event.name}
        width={400}
        height={400}
        key={event.name}
      />
    </ImageWrapper>
  );
};

export default CarouselImage;
