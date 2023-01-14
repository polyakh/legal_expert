//region Global Imports
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Noto_Sans } from "@next/font/google";
//endregion

//region Local Imports
import { Layout } from "./layout";
import "~styles/globals.css";
//endregion

const notoSansFontF = Noto_Sans({
    weight: '500',
    subsets: ['latin'],
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <style jsx global>{`
            :root {
              --noto-sans: ${notoSansFontF.style.fontFamily};
            }
          `}</style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>

  );
}

export default appWithTranslation(MyApp);
