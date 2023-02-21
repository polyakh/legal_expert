//region Global Imports
import type { PropsWithChildren } from "react";
//endregion

//region Local Imports
import type { WithAsProps, Size } from "~shared/typings";
import { sizeMedium, getClassNames } from "~components";
import { styles } from "~components/ui/space";
//endregion

interface SpaceOwnProps extends WithAsProps, Partial<Size> {
  readonly isDirectionColumn?: boolean;
}

const COMPONENT_KEY = "Space";

function Space({
  as: Component = "div",
  size = sizeMedium,
  isDirectionColumn = false,
  children,
}: PropsWithChildren<SpaceOwnProps>) {
  const computedClassName = getClassNames(
    styles.space,
    styles[size],
    isDirectionColumn ? styles.column : styles.row
  );
  return <Component className={computedClassName}>{children}</Component>;
}

export { COMPONENT_KEY };
export type { SpaceOwnProps };

export default Space;
