//region Global Imports
import {type PropsWithChildren, ReactNode} from "react";
//endregion

//region Local Imports
import styles from "./conditional-wrapper.module.css";
//endregion

const COMPONENT_KEY = "ConditionalWrapper";

function ConditionalWrapper({
                              children,
                              condition,
                              wrapper,
                            }: PropsWithChildren<{
  readonly condition: boolean;
  readonly wrapper: (children: ReactNode) => JSX.Element;
}>) {
  return condition ? wrapper(children) : children;
}

export {COMPONENT_KEY};
export default ConditionalWrapper;
