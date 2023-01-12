// region Global Imports
import React, { type ComponentPropsWithoutRef, ReactNode } from 'react';
// endregion

// region Local Imports
import { defaultButtonType, ShapeTypes, shapeDefault } from './consts';
import type { WithAsProps, Size } from "~typings";
import { sizeMedium } from "~shared/consts";
import styles from "./button.module.css";
// endregion

const COMPONENT_KEY = 'Button';

export interface ButtonOwnProps extends WithAsProps, Partial<Size>, ComponentPropsWithoutRef<typeof defaultButtonType> {
    readonly shape?: typeof ShapeTypes[number];
    readonly icon?: ReactNode;
}
const Button = ({
                    as: Component = defaultButtonType,
                    shape = shapeDefault,
                    type = defaultButtonType,
                    size = sizeMedium,
                    disabled = false,
                    onClick,
                    children,
                    icon,
                }: ButtonOwnProps) => {

    const computedClassName = `${styles.button} ${styles[shape]} ${styles[size]}`;
    return    <Component onClick={onClick} type={type} disabled={disabled} className={computedClassName}>
        {icon ?? children}
    </Component>
}


Button.displayName = COMPONENT_KEY;
export default Button;
