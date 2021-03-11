/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

const AboutUsHeading = styled.h2`

`;

const AboutUsText = styled.div`

`;

export const AboutUs = (): JSX.Element => (
  <>
    <Head>
      <title>About Us</title>
    </Head>
    <Container>
      <AboutUsHeading>
        About Us
      </AboutUsHeading>
      <br />
      <AboutUsText>
        <h3>
          "Life may not be the party we hoped for... but while we're here we may as well dance."
          {' '}
          - Jeanne C. Stein
        </h3>
        <br />
        <p>With dance floors shut down, we’ve resorted to livestreaming.</p>
        <br />
        <p>But it’s hard to find out who’s streaming, when, and where. Streams are scattered across different platforms, and announcements are buried in social media.</p>
        <br />
        <p>So we decided to find the best house & techno livestreams happening, and highlight them in one place. GrooveGuide was born.</p>
        <br />
        <p>
          Thank you to the artists and event organizers for keeping the scene going. Stay safe and remember, dancing is never cancelled.
        </p>
        <br />
        <p>
          -
          <span>Carson</span>
          ,
          {' '}
          <span>Max</span>
          ,
          {' '}
          <span>Eric</span>
        </p>
      </AboutUsText>
    </Container>
  </>
);

export default AboutUs;
