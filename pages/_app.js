import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import LoadingScreen from "../components/loadingscreen";

import "../styles/globals.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  // Preloading is enabled
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
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
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
