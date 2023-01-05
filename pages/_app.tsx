//region Global Imports
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
//endregion

//region Local Imports
import { Layout } from "./layout";
import "~styles/globals.css";
//endregion

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
