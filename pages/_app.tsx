
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Layout } from '../src/components/Layout';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }
  html {
    background: #070606;
    height: auto;
    width: 100%;
    
  }
  body {
    max-width: 1220px;
    height: auto;
    border: 1px solid #ff00f2;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    display: flex;
    color: #E0E0E0;
    padding: 5px;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout home>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

