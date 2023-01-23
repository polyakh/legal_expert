//region Local Imports
import {sizeOptions} from "./consts";
import type {IconOwnProps} from "~components/ui/icon";
import type {ClassName} from "~shared/typings";
//endregion
import {sizeMedium} from "~components/consts";


interface ParseElementProps extends ClassName, IconOwnProps {
}

export function parseElementProps({
                                    path,
                                    size = sizeMedium,
                                    viewBox,
                                    name,
                                    className,
                                  }: ParseElementProps) {

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
