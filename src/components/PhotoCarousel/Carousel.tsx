import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselImage from './CarouselImage';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tabletLandscape: {
    breakpoint: { max: 1200, min: 992 },
    items: 2,
    slidesToSlide: 1,
  },
  tabletPortrait: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobileLandscape: {
    breakpoint: { max: 768, min: 480 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  mobilePortrait: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
};

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  text-align: center;
  margin: 25px auto;
`;

const Wrapper = styled.div`
  width: 88%;
  margin: auto;
  height: auto;
`;

const ImageDiv = styled.div`

`;

interface CarouselProps {
  featuredEvents:
  {
    name: string;
    imageUrl: string;
    slug: string;
  }[]
}

export const ImageCarousel = ({ featuredEvents }: CarouselProps): JSX.Element => (
  <Container>
    <Wrapper>
      <Carousel
        responsive={responsive}
        ssr
        draggable={false}
        showDots
        renderDotsOutside
        infinite
        removeArrowOnDeviceType={['mobileLandscape', 'mobilePortrait']}
      >
        {featuredEvents && featuredEvents.map((el) => (
          <CarouselImage event={el} />
        ))}
      </Carousel>
    </Wrapper>
  </Container>
);
