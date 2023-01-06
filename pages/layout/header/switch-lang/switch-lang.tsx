//region Global Imports
import React from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~typings";
import { useToggle } from "~page/layout/header/use-toggle";
const { locales } = require("~root/consts");
import styles from "./switch-lang.module.css";
//endregion

interface SwitchLangOwnProps extends WithAsProps {}

const COMPONENT_KEY = "SwitchLang";

function SwitchLang({ as: Component = "div" }: SwitchLangOwnProps) {
  const [isLangChanged, setIsLangChanged] = useToggle();
  const [uk, pl] = locales
  let currentLang = isLangChanged ? uk: pl;
  return (
    <Component className={styles.switchLang} onClick={setIsLangChanged}>
      {currentLang}
    </Component>
  );
}

export { COMPONENT_KEY };
export type { SwitchLangOwnProps };
export default SwitchLang;
