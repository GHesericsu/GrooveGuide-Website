import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`

`

const ContactHeading = styled.h2`

`

export const Contact = () => {
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
  )
}