import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
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

const ImageDiv = styled.div`

`;

const PreviousButton = styled.button`
  margin-right: 10px;
`;

const NextButton = styled.button`
  width: 100px;
  margin-left: 10px;
`;

const RightArrowButton = styled.button`
  position: absolute !important;
  right: 0px;
  z-index: 100;
  border: 1px solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  /* transform: rotate(-45deg); */
`;

const LeftArrowButton = styled(RightArrowButton)`
  position: absolute !important;
  left: 0px;
  z-index: 5;
  border: 1px solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  /* transform: rotate(135deg); */
`;

const arrowHover = `&:hover {
  color: var(--red);
  transition: 0.2s;
  &:active {
    outline: none;
    color: var(--red);
    transform: scale(1.2);
    transition: all 0.2s;
  }
}`;

const PreviousArrow = styled(LeftArrowCircle)`
  cursor: pointer;
  margin-right: 10px;
  outline: none;
  ${arrowHover}
`;

const NextArrow = styled(RightArrowCircle)`
  cursor: pointer;
  margin-left: 10px;
  outline: none;
  ${arrowHover}
`;

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
      <PreviousArrow title="previous image" aria-label="previous image" size={40} onClick={() => previous()} />
      <NextArrow title="next image" aria-label="next image" size={40} onClick={() => next()} />
    </div>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <RightArrowButton onClick={() => onClick()}>{'>>>'}</RightArrowButton>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <LeftArrowButton onClick={() => onClick()}>{'<<<'}</LeftArrowButton>;
};

export const ImageCarousel = ({ featuredEvents }: CarouselProps): JSX.Element => (
  <Container>
    <Wrapper>
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        ssr
        showDots
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup/>}
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
