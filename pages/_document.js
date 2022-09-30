import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Animate-css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/*Materialize-css*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        {/*Google Fonts*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        
      </Head>
      <body>
        <Main />
        <NextScript />

        {/*Twitter Widgets*/}
        <Script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></Script>
      </body>
    </Html>
  );
}
