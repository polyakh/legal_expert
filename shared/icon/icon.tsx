//region Global Imports
import React, { isValidElement } from 'react';
import type { ReactNode } from 'react';
//endregion

//region Local Imports
import type {WithAsProps, Size} from "~typings";
import styles from "./nav-link.module.css";
import * as icons from "./paths";
import { parseElementProps } from "./utilities";
import type { IconType } from "./types";
//endregion

const COMPONENT_KEY = "Icon";

// https://codesandbox.io/s/540wo78x04?file=/src/components/Icon/Icon.js:698-702

interface CommonProps {
    readonly color: string;
    readonly path: ReactNode;
    readonly viewBox: string;
}
interface IconOwnProps extends Size, Partial<CommonProps> {
    readonly name: IconType;
}



const SVGElement = ({ path, ...restProps }: any) => (
    <svg {...restProps}>
        {path}
    </svg>
);
function Icon({ name, size }: IconOwnProps) {
    const { path } = icons[name as IconType];

    if(!isValidElement(path[size])) {
        return null;
    }

    const iconProps = parseElementProps({
        iconPath: path[size],
        size,
        // TODO add a type => viewBox
        viewBox: undefined,
        name
    });



    return (
        <SVGElement {...iconProps}/>
    )
}

export {COMPONENT_KEY};
export default Icon;