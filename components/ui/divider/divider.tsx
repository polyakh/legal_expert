// region Global Imports
import { type PropsWithChildren } from "react";
// endregion

// region Local Imports
import type { WithAsProps } from "~shared/typings";
import styles from "./divider.module.css";
// endregion

const COMPONENT_KEY = "Divider";

export interface DividerOwnProps extends WithAsProps {}

const Divider = ({
  as: Component = "div",
  children,
}: PropsWithChildren<DividerOwnProps>) => {
  return (
    <Component className={styles.divider} role="separator">
      {children}
    </Component>
  );
};

Divider.displayName = COMPONENT_KEY;
export default Divider;
