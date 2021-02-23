import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  border: 1px solid #00ff15;
  min-height: 600px;
  height: auto;
  width: 100%;
`;

const AboutUsHeading = styled.h2`

`;

const AboutUsText = styled.p`

`;

export const AboutUs = () => (
  <>
    <Head>
      <title>About Us</title>
    </Head>
    <Container>
      <AboutUsHeading>
        About Us
      </AboutUsHeading>
      <AboutUsText>
        This article is about us.
      </AboutUsText>
    </Container>
  </>
);

export default AboutUs;
