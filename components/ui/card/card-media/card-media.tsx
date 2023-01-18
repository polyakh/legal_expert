//region Global Imports
import React from "react";
import Image, {type ImageProps} from 'next/image'
//endregion

//region Local Imports
import type {WithAsProps} from "~shared/typings";
import styles from "./card-media.module.css";

//endregion


interface CardMediaOwnProps extends WithAsProps, ImageProps {
}

const COMPONENT_KEY = "CardMedia";

function CardMedia({
                     as: Component = "div",
                     src,
                     alt = 'default alt',
                   }: CardMediaOwnProps) {
  return (
    <Component className={styles.cardMedia}>
      <Image
        width={160}
        height={160}
        // placeholder='blur'
        src={src}
        alt={alt}
      />
    </Component>
  );
}

export {COMPONENT_KEY};
export default CardMedia;
