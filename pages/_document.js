import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
