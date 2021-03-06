/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { Layout } from '../src/components/Layout';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Thousanddeep-Regular';
    src: url('../fonts/Thousanddeep-Regular.otf') format('opentype');
  }
 
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/nunito-v16-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/nunito-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/nunito-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/nunito-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/nunito-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/nunito-v16-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
  }
 
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/nunito-v16-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/nunito-v16-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/nunito-v16-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/nunito-v16-latin-600.woff') format('woff'), /* Modern Browsers */
        url('../fonts/nunito-v16-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/nunito-v16-latin-600.svg#Nunito') format('svg'); /* Legacy iOS */
  }
  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/nunito-v16-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/nunito-v16-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/nunito-v16-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/nunito-v16-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../fonts/nunito-v16-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/nunito-v16-latin-700.svg#Nunito') format('svg'); /* Legacy iOS */
  }
  /* nunito-800 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: url('../fonts/nunito-v16-latin-800.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/nunito-v16-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/nunito-v16-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/nunito-v16-latin-800.woff') format('woff'), /* Modern Browsers */
        url('../fonts/nunito-v16-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/nunito-v16-latin-800.svg#Nunito') format('svg'); /* Legacy iOS */
  }
  * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      font-family: 'Nunito', arial;
      font-display: fallback;
  }
  html { 
    height: auto;
    width: 100%;
    display: block;
    --white: #C0C0C0;
    --black: #070606;
    --red: #C71E1E;
    --dark-gray: #1B1717;
    --gray: #282828
  }
  body {
    background: #070606;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    color: #C0C0C0;
  }
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
