//region Global Imports
import React from "react";
//endregion

//region Local Imports
import type { WithAsProps, Description, Title } from "~typings";
import styles from "./card-meta.module.css";
//endregion


interface CardMetaOwnProps extends WithAsProps, Description, Title {}
const COMPONENT_KEY = "CardMeta";
function CardMeta({
                     as: Component = "div",
                     title,
    description
}: CardMetaOwnProps) {
  return (
    <Component className={styles.cardMeta}>
        {title}
        {description}
    </Component>
  );
}

export { COMPONENT_KEY };
export default CardMeta;
