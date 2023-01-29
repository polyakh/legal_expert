//region Global Imports
import { type InputHTMLAttributes, type HTMLInputTypeAttribute, useId } from "react";
//endregion

//region Local Imports
import type {WithAsProps, Size} from "~shared/typings";
import {getClassNames} from "~components/utilities";
import { useFieldState } from "./use-field-state";
import styles from "./text-field.module.css";
import { inputTypeText, type InputTypes } from "./consts";

//endregion

type TextFieldAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
  | "size"
>;
interface TextFieldOwnProps extends WithAsProps, Partial<Size>, TextFieldAttributes {
  // AllowInputType
  readonly type?: typeof InputTypes[number];
}

const COMPONENT_KEY = "TextField";

function TextField({
                     as: Component = "input",
                     value,
                     type = inputTypeText,
                     placeholder,
                     disabled,
                     name,
}: TextFieldOwnProps) {
  const computedStyles = getClassNames(styles.textField)
  const { onChange } = useFieldState({ value });
  return (
    <Component
      id={type}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={computedStyles}
      onChange={onChange}
      name={name}
    />
  );
}

export {COMPONENT_KEY};
export default TextField;
