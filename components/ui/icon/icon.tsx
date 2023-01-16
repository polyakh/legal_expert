//region Global Imports
import React, {isValidElement, type ReactNode} from "react";
//endregion

//region Local Imports
import type {ProfilesKeys} from "~shared/typings";
import type {Size} from "~shared/typings";
import {sizeMedium} from "~components/consts";
import styles from "./icon.module.css";
import * as icons from "./paths";
import {parseElementProps} from "./utilities";
//endregion

const COMPONENT_KEY = "Icon";

// https://codesandbox.io/s/540wo78x04?file=/src/components/Icon/Icon.js:698-702
interface CommonProps {
  readonly path: ReactNode;
  readonly viewBox: string;
}

export interface IconOwnProps extends Size, Partial<CommonProps> {
  readonly name: ProfilesKeys;
}

const SVGElement = ({path, ...restProps}: ReturnType<typeof parseElementProps>) => {
  return <svg {...restProps}>{path}</svg>
}

function Icon({name, size = sizeMedium}: IconOwnProps) {
  const {path, viewBox} = icons[name as ProfilesKeys];

  if (!isValidElement(path[size])) {
    return null;
  }

  const iconProps = parseElementProps({
    path: path[size],
    size,
    viewBox: viewBox,
    name,
    className: styles.icon,
  });

  return <SVGElement {...iconProps} />;
}

export {COMPONENT_KEY};
export default Icon;
