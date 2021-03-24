/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  border-top: 5px solid transparent;
  &:hover {
    cursor: pointer;
    border-top: 5px solid var(--red);
  }
  
  
`;

const ImageAnchorLink = styled.a`
  
`;

const StyledImage = styled(Image)`
  border-top: 5px solid transparent;
  &:active {
    transform: scale(0.95);
    transition: 0.5s;
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
  const { name, slug, imageUrl } = event;
  return (
    <ImageWrapper>
      <Link href={`/event/${encodeURIComponent(slug)}`} passHref>
        <ImageAnchorLink>
          <StyledImage
            priority
            src={`${imageUrl}?auto=format&h=400&w=400`}
            alt={name}
            width={400}
            height={400}
            key={name}
          />
        </ImageAnchorLink>
      </Link>
    </ImageWrapper>
  );
};

export default CarouselImage;
