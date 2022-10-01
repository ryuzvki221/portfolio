import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import "../styles/globals.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="author" content="Ryuzvki" />
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
