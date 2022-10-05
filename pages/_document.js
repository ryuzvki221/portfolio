import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700,700i,800,800i&display=optional"
        />
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
