//region Global Imports
import React, {type PropsWithChildren} from "react";
//endregion

//region Local Imports
import {Header, Footer} from ".";
import styles from "./layout.module.css";
//endregion
const COMPONENT_KEY = "Layout";

function RootLayout({children}: PropsWithChildren<{}>) {
  return (
    <>
      <Header/>
      <div className={styles.layout__main}>
        {children}
      </div>
      <Footer/>
    </>
  );
}

export default RootLayout;
export {COMPONENT_KEY};
