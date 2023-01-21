//region Global Imports
import React, { type InputHTMLAttributes } from "react";
//endregion

//region Local Imports
import type {WithAsProps, Value} from "~shared/typings";
import { useFieldState } from "./use-field-state";
import styles from "./text-field.module.css";

//endregion

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "defaultValue" | "value"
>;


interface TextFieldOwnProps extends WithAsProps, Value {

}

const COMPONENT_KEY = "TextField";

function TextField({as: Component = "input", value}: TextFieldOwnProps) {
  const { onChange } = useFieldState({ value });
  return (
    <Component onChange={onChange}>TextField</Component>
  );
}

export {COMPONENT_KEY};
export default TextField;
