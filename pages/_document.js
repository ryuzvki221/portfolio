import { Html, Head, Main, NextScript } from "next/document";
import { ANALYTICS_ID } from "../lib/analytics";
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
        {/*Twitter Widgets*/}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        {/* End Twitter Widgets */}

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/*End  Global site tag (gtag.js) - Google Analytics */}

      </Head>
      <body>
 
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
