//region Global Imports
import React from "react";
import Image from 'next/image'
//endregion

//region Local Imports
import { WithAsProps } from "~typings";
import styles from "./card-media.module.css";
//endregion


interface CardMediaOwnProps extends WithAsProps { // Source Object
  readonly width?: number;
  readonly height?: number;
  readonly src: string;
  readonly alt?: string;
}
const COMPONENT_KEY = "CardMedia";
function CardMedia({
                     as: Component = "div",
                     src
}: CardMediaOwnProps) {
  return (
    <Component className={styles.cardMedia}>
      <Image
          src={src}
          alt="default alt"
          width={200}
          height={200}
      />
    </Component>
  );
}

export { COMPONENT_KEY };
export default CardMedia;
