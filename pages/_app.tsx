import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script src="https://unpkg.com/react/umd/react.production.min.js" />

      <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" />

      <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
