import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";
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
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
