// region Global Imports
import {type PropsWithChildren} from 'react';
// endregion

// region Local Imports
import {TitleLVLTypes, LVL2} from './consts';
import type {WithAsProps} from "~shared/typings";
// endregion

const COMPONENT_KEY = 'Typography';

export interface TypographyOwnProps extends WithAsProps {
  readonly lvl?: typeof TitleLVLTypes[number]
}

const Typography = ({lvl = LVL2, children, ...props}: PropsWithChildren<TypographyOwnProps>) => {
  const {as: Component = `h${lvl}`} = props;
  // @ts-ignore
  return <Component>
    {children}
  </Component>
}


Typography.displayName = COMPONENT_KEY;
export default Typography;
