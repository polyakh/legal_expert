//region Global Imports
import { type LabelHTMLAttributes, PropsWithChildren } from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import  {LABEL_POSITION_LEFT, type LabelPositions } from "./consts";
import { getClassNames } from "~components";
import styles from "./checkbox-label.module.css";
//endregion

type CheckboxLabelAttributes = LabelHTMLAttributes<HTMLLabelElement>;
  
interface CheckboxLabelOwnProps extends WithAsProps, CheckboxLabelAttributes {
  readonly labelPosition?: typeof LabelPositions[number];
}

const COMPONENT_KEY = "CheckboxLabel";

function CheckboxLabel({
  as: Component = "label",
  children,
  labelPosition
}: PropsWithChildren<CheckboxLabelOwnProps>) {
  const computedStyles = getClassNames(labelPosition  === LABEL_POSITION_LEFT ? styles.checkboxLabelLeft : styles.checkboxLabelRight);
  return (
    <Component
      className={styles.checkbox}
    >
        <span className={computedStyles}>{children}</span>
        </Component>
  );
}

export { COMPONENT_KEY };
export default CheckboxLabel;
