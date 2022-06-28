import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import AuthContextProvider from '../stores/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}
