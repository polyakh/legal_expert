//region Global Imports
import React from "react";
import {useTranslation} from "next-i18next";
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
  const { i18n } = useTranslation();




  const [uk, pl] = locales
  let currentLang = isLangChanged ? uk: pl;
  console.log('@', i18n)
  const handelChangeLanguage = (lang: string) => {
    i18n.changeLanguage('uk');
    setIsLangChanged();
  }

  return (
    <Component className={styles.switchLang} onClick={handelChangeLanguage}>
      {currentLang}
    </Component>
  );
}

export { COMPONENT_KEY };
export type { SwitchLangOwnProps };
export default SwitchLang;