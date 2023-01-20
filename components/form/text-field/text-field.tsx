//region Global Imports
import React, { type InputHTMLAttributes } from "react";
//endregion

//region Local Imports
import type {WithAsProps} from "~shared/typings";
import styles from "./services-list.module.css";

//endregion

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "defaultValue" | "value"
>;


interface TextFieldOwnProps extends WithAsProps {
}

const COMPONENT_KEY = "TextField";

function TextField({as: Component = "div"}: TextFieldOwnProps) {
  return (
    <Component className='max-w mx-auto'></Component>
  );
}

export {COMPONENT_KEY};
export default TextField;
