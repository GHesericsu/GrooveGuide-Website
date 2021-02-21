import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`

`

const AboutUsHeading = styled.h2`

`

const AboutUsText = styled.p`

`

export const AboutUs = () => {
  return (
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
  )
}