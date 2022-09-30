import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {



  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/*Materialize-css*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        {/*Google Fonts*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
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
