// region Global Imports
import type { PropsWithChildren } from "react";
// endregion

// region Local Imports
import type { WithAsProps } from "~shared/typings";
import { TitleLVLTypes, LVL1, styles } from "~components/ui/typography/title";
import { getClassNames } from "~components/utilities";
// endregion

const COMPONENT_KEY = "Title";

export interface TitleOwnProps extends WithAsProps {
  readonly lvl?: typeof TitleLVLTypes[number];
}

const Title = ({
  lvl = LVL1,
  children,
  ...restProps
}: PropsWithChildren<TitleOwnProps>) => {
  const { as: Component = `h${lvl}` } = restProps;
  const computedClassName = getClassNames(styles.title, `h${lvl}`);
  return <Component className={computedClassName}>{children}</Component>;
};

Title.displayName = COMPONENT_KEY;
export default Title;
