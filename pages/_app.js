import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Provider } from "next-auth/client";
import NProgress from "next-nprogress-emotion";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <NProgress color="#4186F5" />
    </Provider>
  );
}

export default MyApp;
