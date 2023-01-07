//region Global Imports
import React from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~typings";
import styles from "./footer.module.css";
import { Copyright } from './copyright'
//endregion

type FooterOwnProps = WithAsProps;

const COMPONENT_KEY = "Footer";

const currentYear = new Date().getFullYear();

function Footer({ as: Component = "footer" }: FooterOwnProps) {
  return (
    <Component className={styles.footer}>
      <div className="max-w mx-auto">
        <div className={styles.footer__inner}>
         <Copyright />
        </div>
      </div>
    </Component>
  );
}

export { COMPONENT_KEY };
export type { FooterOwnProps };
export default Footer;
