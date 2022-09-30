import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Ryuzvki" />
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
