//region Global Imports
import React, {useState, useEffect} from 'react';
import type { ReactNode } from 'react';
//endregion

//region Local Imports
import type {WithAsProps, Size} from "~typings";
import styles from "./nav-link.module.css";
import * as icons from "./paths";

//endregion

const COMPONENT_KEY = "Icon";
const sizeOptions = {
    small: "16",
    medium: "24",
    large: "36",
    xlarge: "48"
} as const;
type SizeOptions = typeof sizeOptions;
// https://codesandbox.io/s/540wo78x04?file=/src/components/Icon/Icon.js:698-702

interface CommonProps {
    readonly color: string;
    readonly size: SizeOptions;
    readonly path: ReactNode;
    readonly viewBox: string;
}
interface IconOwnProps extends CommonProps{
    readonly name: string;

}

const SVGElement = ({ color, size, path, viewBox }: CommonProps) => (
    <div color={color}>
        {path}
    </div>
);
function Icon({ name = 'Search', }: IconOwnProps) {

    const selectedIcon = icons[name as 'Search'];
    let iconPath = null;
    let iconBox = "";
    let iconSize = "";
    // @ts-expect-error
    let setSize = sizeOptions[size];

    return (
        <div>
           y
        </div>
    )
}

export {COMPONENT_KEY};
export default Icon;