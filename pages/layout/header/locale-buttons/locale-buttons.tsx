//region Global Imports
import React from "react";
import { useTranslation } from "next-i18next";
//endregion

//region Local Imports
import { WithAsProps } from "~typings";
const { commonNS } = require("~root/consts");
import styles from "./locale-buttons.module.css";
//endregion

interface LocaleButtonsOwnProps extends WithAsProps {}

const COMPONENT_KEY = "Navigation";

const LocaleButton = ({ lang, isActive, onClick }: any) => {
  return <div>LocaleButton: {lang}</div>;
};

function LocaleButtons({ as: Component = "div" }: LocaleButtonsOwnProps) {
  const { i18n } = useTranslation("common");
  const handelChangeLanguage = (lang: string) => i18n.changeLanguage(lang);
  const renderLocaleButtons = (activeLanguage: string) =>
    i18n.languages.map((lang) => (
      <LocaleButton
        key={lang}
        lang={lang}
        isActive={activeLanguage === lang}
        onClick={handelChangeLanguage}
      />
    ));
  return (
    <Component role="navigation" className={styles.localeButtons}>
      LocaleButtons
      {renderLocaleButtons(i18n.language)}
    </Component>
  );
}

export { COMPONENT_KEY };
export type { LocaleButtonsOwnProps };
export default LocaleButtons;
