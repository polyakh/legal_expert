//region Global Imports
import { type InputHTMLAttributes, useId } from "react";
//endregion

//region Local Imports
import type { WithAsProps, Size } from "~shared/typings";
import {
  getClassNames,
  ConditionalWrapper,
  useFieldState,
  inputTypeText,
  type InputTypes,
} from "~components";
import styles from "./text-field.module.css";
//endregion

type TextFieldAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
>;
interface TextFieldOwnProps
  extends WithAsProps,
    Partial<Size>,
    TextFieldAttributes {
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
  required = false,
}: TextFieldOwnProps) {
  const computedStyles = getClassNames(styles.textField);
  const { onChange } = useFieldState({ value });
  const id = useId();

  const instanceTextField = (
    <Component
      id={id}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={computedStyles}
      onChange={onChange}
      name={name}
    />
  );
  return (
    <ConditionalWrapper
      isCondition={required}
      wrapper={(child) => (
        <div>
          {instanceTextField}
          <span>errorMsg</span>
        </div>
      )}
    >
      {instanceTextField}
    </ConditionalWrapper>
  );
}

export { COMPONENT_KEY };
export default TextField;
