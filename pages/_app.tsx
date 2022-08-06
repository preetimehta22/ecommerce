import Head from 'next/head';
import type { AppProps } from 'next/app'
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
  );}

export default MyApp
