// region Global Imports
import {type PropsWithChildren} from 'react';
// endregion

// region Local Imports
import type {WithAsProps} from "~shared/typings";
import {getClassNames} from "~components/utilities"
import styles from "./typography.module.css"
// endregion

const COMPONENT_KEY = 'Typography';

export interface TypographyOwnProps extends WithAsProps, HTMLElement {

  readonly hasUnderline?: boolean;
  readonly hasEllipsis?: boolean;
}

const Typography = ({as: Component = 'div', children, hasUnderline }: PropsWithChildren<TypographyOwnProps>) => {
  const computedStyles = getClassNames(styles.typography, hasUnderline ? styles.underline : '')
  return <Component className={computedStyles}>
    {children}
  </Component>
}


Typography.displayName = COMPONENT_KEY;
export default Typography;
