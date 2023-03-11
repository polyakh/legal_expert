//region Global Imports
import { type PropsWithChildren } from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import styles from "./alert-text.module.css";
//endregion

const COMPONENT_KEY = "AlertText";

function AlertText({
  as: Component = "span",
  children,
}: PropsWithChildren<WithAsProps>) {
  return Boolean(children) ? (
    <Component role="alert">{children}</Component>
  ) : null;
}

export { COMPONENT_KEY };
export default AlertText;
//region Global Imports
