import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import { LeftArrowCircle, RightArrowCircle } from '@styled-icons/boxicons-regular';
import 'react-multi-carousel/lib/styles.css';
import CarouselImage from './CarouselImage';
import styles from './carousel.module.css';

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
  min-height: 300px;
  text-align: center;
  padding-bottom: 30px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: auto;
`;

const arrowHover = `&:hover {
  color: var(--red);
  transition: 0.2s;

  
}`;

const ArrowButton = styled.button`
  
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    transform: scale(1.2);
    transition: all 0.2s;
  }
  background-color: var(--black);
  color: var(--white);
  border: none;
  margin: 3px 6px;
`;

const PreviousArrow = styled(LeftArrowCircle)`
  cursor: pointer;
 
  ${arrowHover}
`;

const NextArrow = styled(RightArrowCircle)`
  cursor: pointer;
  
  ${arrowHover}
`;

const FeaturedHeading = styled.h2`
  color: var(--red);
  margin: 10px auto;
`;

interface CarouselProps {
  featuredEvents:
  {
    name: string;
    imageUrl: string;
    slug: string;
  }[]
}

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => (
  <div className="carousel-button-group">
    <ArrowButton>
      {previous && <PreviousArrow title="previous image" aria-label="previous image" size={40} onClick={() => previous()} />}
    </ArrowButton>
    <ArrowButton>
      {next && <NextArrow title="next image" aria-label="next image" size={40} onClick={() => next()} />}
    </ArrowButton>
  </div>
);

export const ImageCarousel = ({ featuredEvents }: CarouselProps): JSX.Element => (
  <Container>
    <FeaturedHeading id="featured">Featured</FeaturedHeading>
    <Wrapper>
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        ssr
        showDots
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        containerClass={styles.customCarouselContainer}
        renderDotsOutside
        removeArrowOnDeviceType={['mobileLandscape', 'mobilePortrait']}
      >
        {featuredEvents && featuredEvents.map((el) => (
          <CarouselImage event={el} key={el.imageUrl} />
        ))}
      </Carousel>
    </Wrapper>
  </Container>
);
