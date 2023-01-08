//region Global Imports
import React, { ReactNode } from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~typings";
import { CardMedia } from "./card-media";
import { CardMeta } from "./card-meta";
import styles from "./card.module.css";
//endregion


interface CardOwnProps extends WithAsProps {
  readonly title: string;// add to common type
  readonly description: string;// add to common type
  readonly src: string;
  readonly actions: Array<ReactNode>
}
const COMPONENT_KEY = "Card";
function Card({ as: Component = "div", title, description, src, actions }: CardOwnProps) {
  return (
    <Component className={styles.card}>
      <CardMedia src={src}/>
      <CardMeta title={title} description={description}/>
      {actions}
    </Component>
  );
}

export { COMPONENT_KEY };
export default Card;
