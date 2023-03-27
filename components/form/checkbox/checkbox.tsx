//region Global Imports
import { type InputHTMLAttributes, useId, useState, PropsWithChildren, type ChangeEvent } from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import { getClassNames, inputCheckbox } from "~components";
import styles from "./checkbox.module.css";
//endregion

type CheckboxAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
>;
type CheckboxOwnProps  = WithAsProps & CheckboxAttributes;

const COMPONENT_KEY = "Checkbox";

function Checkbox({
  as: Component = "input",
  type = inputCheckbox,
  children = 'Label'
}: PropsWithChildren<CheckboxOwnProps>) {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  const computedStyles = getClassNames(styles.checkbox);
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const newCheckedValue = event.target.checked;
    setIsChecked(newCheckedValue);
  };
  return (
    <label htmlFor={id} className={styles.label}>
      <Component
        id={id}
        type={type}
        checked={isChecked}
        className={computedStyles}
        onChange={handleCheckboxChange}
      />
      <span className={styles.child}>{children}</span>
    </label>
  );
}

export { COMPONENT_KEY };
export default Checkbox;
