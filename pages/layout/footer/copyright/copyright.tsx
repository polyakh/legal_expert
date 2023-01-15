//region Global Imports
import React from "react";
//endregion

//region Local Imports
import type {WithAsProps} from "~typings";
import styles from "./copyright.module.css";
import {appName} from "~components/shared";
//endregion


const COMPONENT_KEY = "Copyright";

const currentYear = new Date().getFullYear();

function Copyright({as: Component = "span"}: WithAsProps) {
  return (
    <Component>
      <span>Copyright</span> © {currentYear} {appName} Inc. All rights
      reserved.
    </Component>
  );
}

export {COMPONENT_KEY};
export default Copyright;
