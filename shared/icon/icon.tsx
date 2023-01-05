//region Global Imports
import React, { isValidElement } from "react";
import type { ReactNode } from "react";
//endregion

//region Local Imports
import type { Size, ProfilesKeys } from "~typings";
import { sizeMedium } from "~shared";
import styles from "./icon.module.css";
import * as icons from "./paths";
import { parseElementProps } from "./utilities";
//endregion

const COMPONENT_KEY = "Icon";
// https://codesandbox.io/s/540wo78x04?file=/src/components/Icon/Icon.js:698-702

interface CommonProps {
  readonly color: string;
  readonly path: ReactNode;
  readonly viewBox: string;
}
interface IconOwnProps extends Partial<Size>, Partial<CommonProps> {
  readonly name: ProfilesKeys;
}

const SVGElement = ({ path, ...restProps }: any) => (
  <svg {...restProps}>{path}</svg>
);
function Icon({ name, size = sizeMedium }: IconOwnProps) {
  const { path, viewBox } = icons[name as ProfilesKeys];

  if (!isValidElement(path[size])) {
    return null;
  }

  const iconProps = parseElementProps({
    iconPath: path[size],
    size,
    // TODO add a type => viewBox
    viewBox: viewBox,
    name,
    className: styles.icon,
  });

  return <SVGElement {...iconProps} />;
}

export { COMPONENT_KEY };
export default Icon;
