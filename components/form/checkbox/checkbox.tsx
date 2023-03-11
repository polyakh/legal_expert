//region Global Imports
import { type InputHTMLAttributes, useId, useState } from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import { getClassNames, inputCheckbox, type InputTypes } from "~components";
//endregion

type CheckboxAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "onChange"
>;
interface CheckboxOwnProps extends WithAsProps, CheckboxAttributes {
  // AllowInputType
  readonly type?: typeof InputTypes[number];
}

const COMPONENT_KEY = "Checkbox";

function Checkbox({
  as: Component = "input",
  type = inputCheckbox,
  defaultChecked = false,
}: CheckboxOwnProps) {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  const computedStyles = getClassNames(styles.textField);
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newCheckedValue = event.target.checked;
    setIsChecked(newCheckedValue);
  };
  return (
    <Component
      id={id}
      type={type}
      checked={isChecked}
      defaultChecked={defaultChecked}
      className={computedStyles}
      onChange={handleCheckboxChange}
    />
  );
}

export { COMPONENT_KEY };
export default Checkbox;
