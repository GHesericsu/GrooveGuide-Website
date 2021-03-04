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
        <p>"Life may not be the party we hoped for... but while we're here we may as well dance." - Jeanne C. Stein</p>
        <p>With dance floors shut down, we’ve resorted to livestreaming.</p>
        <p>But it’s hard to find out who’s streaming, when, and where. Streams are scattered across different platforms, and announcements are buried in social media.</p>
      </AboutUsText>
    </Container>
  </>
);

export default AboutUs;
