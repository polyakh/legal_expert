//region Global Imports
import React from "react";
import Image from "next/image";
//endregion

//region Local Imports
import styles from "./index.module.css";
import { Head } from "./head";
const { defaultLocal, commonNS } = require("~root/consts");
//endregion
const COMPONENT_KEY = "IndexPage";

function IndexPage() {
  return (
    <div className="max-w mx-auto">
      <Head />
        <section className={styles.indexPage__about}>
            <h2>About Me</h2>
            <p>Lollipop123 is an independent magazine that celebrates the writing of teens. We publish original work about the exciting and sometimes unpleasant phases of childhood. Originally created in 2015, the magazine collects stories, essays, and interviews about growing up. </p>
        </section>
        <div>
            <Image
                height={600}
                width={300}
                src='https://images.prismic.io/jameshome/bf2ddacc-71be-4a0e-8246-c67548d58dad_price.png'
                alt='I'
            />
        </div>
    </div>
  );
}
export default IndexPage;

export { COMPONENT_KEY };
