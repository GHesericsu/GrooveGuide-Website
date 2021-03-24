import styled from 'styled-components';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const Container = styled.div`
  min-height: 600px;
  height: auto;
  width: 100%;
`;

const ContactHeading = styled.h2`

`;

const Form = styled.form`

`;

export const Contact = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
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
};

export default Contact;
