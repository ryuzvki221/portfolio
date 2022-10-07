import Head from "next/head";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

import "../styles/globals.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  useEffect(() => {

    // here you can add your aos options
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
    // Preloading is enabled
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Head>
        <meta name="author" content="Ryuzvki" />
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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
