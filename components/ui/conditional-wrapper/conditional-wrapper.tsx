//region Global Imports
import {type PropsWithChildren, ReactNode, ReactElement} from "react";
//endregion

//region Local Imports
import styles from "./conditional-wrapper.module.css";
//endregion

const COMPONENT_KEY = "ConditionalWrapper";

function ConditionalWrapper({
                              children,
                              isCondition,
                              wrapper,
                            }: PropsWithChildren<{
  readonly isCondition: boolean;
  readonly wrapper: (child: ReactNode) => ReactElement;
}>) {
  return isCondition ? wrapper(children) : <>{children}</>;
}

export {COMPONENT_KEY};
export default ConditionalWrapper;
