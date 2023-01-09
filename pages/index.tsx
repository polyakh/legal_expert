//region Global Imports
import React from "react";
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
export default IndexPage;

export { COMPONENT_KEY };
