//region Global Imports
import Image from "next/image";

//endregion

//region Local Imports
import styles from "./index.module.css";
import { Head } from "./head";

import { defaultLocal, commonNS } from "./consts";
//endregion
const COMPONENT_KEY = "IndexPage";

function IndexPage() {
  return (
    <>
      <Head />

      <div className={styles.gridContainer}>
        <div className={styles.imageContainer}>
          <Image fill src="/test.jpg" alt="I" />
        </div>
        <div>
        <h2>Le</h2>
        <p>
          Lollipop123 is an independent magazine that celebrates the writing of
          teens. We publish original work about the exciting and sometimes
          unpleasant phases of childhood. Originally created in 2015, the magazine
          collects stories, essays, and interviews about growing up.{" "}
        </p>
      </div>
      </div>

   
     

    </>
  );
}

export default IndexPage;

export { COMPONENT_KEY };
