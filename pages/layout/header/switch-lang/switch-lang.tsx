//region Global Imports
import { useTranslation } from "next-i18next";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import { useToggle } from "~pages/layout/header/use-toggle";

import { locales } from "~consts.js";
import styles from "./switch-lang.module.css";

//endregion

interface SwitchLangOwnProps extends WithAsProps {}

const COMPONENT_KEY = "SwitchLang";

function SwitchLang({ as: Component = "div" }: SwitchLangOwnProps) {
  const a = useTranslation();
  console.log('~~~', a)
  const [uk, pl] = locales;
  const handelChangeLanguage = () => {
    // const lang = i18n.language === uk ? pl : uk;
    // i18n.changeLanguage(lang);
  };

  return (
    <Component className={styles.switchLang} onClick={handelChangeLanguage}>
     {/* {i18n.language === uk ? 'Español' : 'English'} */}
    </Component>
  );
}

export { COMPONENT_KEY };
export type { SwitchLangOwnProps };
export default SwitchLang;
