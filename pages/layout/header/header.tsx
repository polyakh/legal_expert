//region Global Imports
import React from "react";
import Link from "next/link";
//endregion

//region Local Imports
import type { WithAsProps } from "~typings";
import { appName, SocialFollow, Button } from "~shared";
import { PATH_INDEX } from "~shared/consts";
import { Navigation } from "./navigation";
import { SwitchLang } from "./switch-lang";
import styles from "./header.module.css";
//endregion

interface HeaderOwnProps extends WithAsProps {}

const COMPONENT_KEY = "Header";

function Header({ as: Component = "header" }: HeaderOwnProps) {
  return (
    <Component className={styles.header}>
      <div className="max-w mx-auto">
        <div className={`${styles.header__inner} ${styles.header_sticky}`}>
          <Link href={PATH_INDEX} title='Go to the home' className={styles.header__logo}>
            <h1>{appName}</h1>
          </Link>
          <Navigation />
          <SocialFollow />
          <SwitchLang />
          <Button>Nice</Button>
        </div>
      </div>
    </Component>
  );
}

export { COMPONENT_KEY };
export type { HeaderOwnProps };
export default Header;
