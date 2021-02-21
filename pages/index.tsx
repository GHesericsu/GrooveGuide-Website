import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { Carousel } from '../src/components/PhotoCarousel/Carousel';
import { AboutUs } from './aboutUs';
import { Contact } from './Contact';

const Wrapper = styled.div`
  border: 1px solid #00ff15;
  min-height: 600px;
  height: auto;
  width: 100%;
`

export const Index = () => {
  return (
    <>
      <Head>
        <title>DJ Live Streams</title>
        <meta name="description" content="DJ Live Streams" />
        <meta name="keywords" content="techno, house, live streams, dj" />
      
      </Head>
      <Wrapper>
        <Carousel />
        As you adjust the parameters that define the color, it gets displayed in all three standard Web CSS formats. In addition, based on the currently-selected color, a palette for HSL and HSV, as well as alpha, is generated. The "eyedropper" style color picker box can be toggled between HSL or HSV format. You can also test colors and how they overlap one another by dragging them into the box at the bottom of the tool and moving them over one another. Adjust their relative Z index values to move them forward and behind one another.
      </Wrapper>
    </>
  );
};

export default Index;
