//region Global Imports
import { type PropsWithChildren } from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import styles from "./container.module.scss";
//endregion


const COMPONENT_KEY = "Container";

function Container({as: Component = "div", children}: PropsWithChildren<WithAsProps>) {
  return (
    <Component className={styles.container}>
      {children}
    </Component>
  );
}

export { COMPONENT_KEY };
export default Container;
