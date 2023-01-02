import type { ElementType } from "react";

import { SizeTypes } from '~shared/consts'

export interface WithAsProps<As extends ElementType | string = ElementType> {
    readonly as?: As;
}

export type SizeType = typeof SizeTypes[number]
export interface Size {
    readonly size: SizeType;
}
