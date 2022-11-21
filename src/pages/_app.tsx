import { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyle } from "styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript - Boilerplate</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
