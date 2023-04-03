//region Global Imports
import { useTranslation } from "next-i18next";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import { useToggle } from "~pages/layout/header/use-toggle";


import styles from "./switch-lang.module.css";

//endregion

interface SwitchLangOwnProps extends WithAsProps {}

const COMPONENT_KEY = "SwitchLang";

function SwitchLang({ as: Component = "div" }: SwitchLangOwnProps) {
  const { state, handleToggle } = useToggle();
  const { i18n } = useTranslation();



  return (
    <Component className={styles.switchLang} onClick={handleToggle}>
   
    </Component>
  );
}

export { COMPONENT_KEY };
export type { SwitchLangOwnProps };
export default SwitchLang;
