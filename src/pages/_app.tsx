import { AppProps } from "next/app";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { globalStyles } from "styles/global";
import { Wrapper } from "styles/_app";

globalStyles();

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
};

export default App;
