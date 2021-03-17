import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselImage from './CarouselImage';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
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
    // partialVisibilityGutter: 30,
  },
  mobilePortrait: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter: 30,
  },
};

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  text-align: center;
  margin: 25px auto;
  padding-bottom: 30px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 88%;
  margin: auto;
  height: auto;
`;

const ImageDiv = styled.div`

`;

const ButtonOne = styled.button`
`
const ButtonTwo = styled.button`
`

interface CarouselProps {
  featuredEvents:
  {
    name: string;
    imageUrl: string;
    slug: string;
  }[]
}

const ButtonGroup = ({ next, previous, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> 
      <ButtonOne onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
    </div>
  );
};

export const ImageCarousel = ({ featuredEvents }: CarouselProps): JSX.Element => (
  <Container>
    <Wrapper>
      <Carousel
        responsive={responsive}
        infinite
        ssr
        draggable={false}
        showDots
        renderButtonGroupOutside
        renderDotsOutside
        removeArrowOnDeviceType={['mobileLandscape', 'mobilePortrait']}
      >
        {featuredEvents && featuredEvents.map((el) => (
          <CarouselImage event={el} />
        ))}
      </Carousel>
    </Wrapper>
  </Container>
);
