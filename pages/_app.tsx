import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
