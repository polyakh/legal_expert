
//region Local Imports
import { sizeOptions } from "./consts";
import type {IconOwnProps} from "~shared/icon";
import type {ClassName} from "~typings";
//endregion

interface ParseElementProps extends ClassName, IconOwnProps {}

export function parseElementProps({
  path,
  size,
  viewBox,
  name,
  className,
}: ParseElementProps) {
  // @ts-ignore
  let computedSize = sizeOptions[size];
  return {
    viewBox: viewBox ?? `0 0 ${computedSize} ${computedSize}`,
    width: computedSize,
    height: computedSize,
    focusable: false,
    path,
    "data-icon": name,
    className: className,
  };
}
