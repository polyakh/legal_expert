//region Global Imports
import React from "react";
import dynamic from 'next/dynamic';
//endregion

//region Local Imports
import type {WithAsProps, Description, Title, HasComponentToShow} from "~shared/typings";
import styles from "./card-meta.module.css";
//endregion


interface CardMetaOwnProps extends WithAsProps, Description, Title, HasComponentToShow {}

const COMPONENT_KEY = "CardMeta";

function CardMeta({
                    as: Component = "div",
                    title,
                    description,
                    hasComponentToShow = true,
                  }: CardMetaOwnProps) {
  let divider = null;
  if(hasComponentToShow) {
    const DynamicDivider = dynamic(() => import('~components/ui/divider/divider'))
    divider = <DynamicDivider />
  }
  return (
    <Component className={styles.cardMeta}>
      <h2 className={styles.cardMeta__title}>{title}</h2>
      {divider}
      <p className={styles.cardMeta__description}>{description}</p>
    </Component>
  );
}

export {COMPONENT_KEY};
export default CardMeta;
