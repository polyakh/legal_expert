//region Global Imports
import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//endregion

//region Local Imports
import { Head } from "./head";
const { defaultLocal, commonNS } = require("~root/consts");
//endregion
const COMPONENT_KEY = "IndexPage";

function IndexPage() {
  return (
    <div className="page-container">
      <Head />
      <p>IndexPage</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? defaultLocal, [commonNS])),
  },
});
export default IndexPage;

export { COMPONENT_KEY };
