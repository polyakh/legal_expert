//region Global Imports
import React from "react";
import HeadNext from "next/head";
//endregion

//region Local Imports
import {appName} from "~components/shared/consts";
//endregion


const COMPONENT_KEY = "Head";

function Head() {
  return (
    <HeadNext>
      <title>{appName}</title>
    </HeadNext>
  );
}

export {COMPONENT_KEY};
export default Head;
