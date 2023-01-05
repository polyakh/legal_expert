//region Global Imports
import React from "react";
import type { PropsWithChildren } from "react";
//endregion

//region Local Imports
import type { WithAsProps, Size } from "~typings";
import { sizeMedium } from "~shared/consts";
import styles from "./space.module.css";
//endregion

type SpaceOwnProps = WithAsProps & Partial<Size>;

const COMPONENT_KEY = "Space";

function Space({
  as: Component = "div",
  size = sizeMedium,
  children,
}: PropsWithChildren<SpaceOwnProps>) {
  return (
    <Component className={`${styles.space} ${styles[size]}`}>
      {children}
    </Component>
  );
}

export { COMPONENT_KEY };
export type { SpaceOwnProps };

export default Space;
