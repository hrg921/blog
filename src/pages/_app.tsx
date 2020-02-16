import { AppContext } from 'next/app';
import { createGlobalStyle } from 'styled-components';

type Props = {
  Component: AppContext["Component"];
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;
