//region Global Imports
import React, { ReactNode } from "react";
//endregion

//region Local Imports
import type { WithAsProps, Title, Description, Src } from "~typings";
import { CardMedia } from "./card-media";
import { CardMeta } from "./card-meta";
import styles from "./card.module.css";
//endregion

export interface CardCommonProps extends Title, Description, Src {}
interface CardOwnProps extends WithAsProps, CardCommonProps {
  readonly actions?: Array<ReactNode>
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
