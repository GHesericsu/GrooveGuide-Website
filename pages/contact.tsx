import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  border: 1px solid #00ff15;
  min-height: 600px;
  height: auto;
  width: 100%;
`;

const ContactHeading = styled.h2`

`;

export const Contact = () => (
  <>
    <Head>
      <title>About Us</title>
    </Head>
    <Container>
      <ContactHeading>
        Contact Us
      </ContactHeading>
    </Container>
  </>
);

export default Contact;
