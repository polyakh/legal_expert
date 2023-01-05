//region Global Imports
import React from "react";

//endregion

//region Local Imports
import type { WithAsProps } from "~typings";
import { appName, SocialFollow } from "~shared";
import { Navigation } from "./navigation";
import styles from "./header.module.css";

//endregion

interface HeaderOwnProps extends WithAsProps {}

const COMPONENT_KEY = "Header";

function Header({ as: Component = "header" }: HeaderOwnProps) {
  return (
    <Component className={styles.header}>
      <div className="max-w mx-auto">
        <div className={`${styles.header__inner} ${styles.header_sticky}`}>
          <h1>{appName}</h1>
          <Navigation />
          <SocialFollow />
        </div>
      </div>
    </Component>
  );
}

export { COMPONENT_KEY };
export type { HeaderOwnProps };
export default Header;
