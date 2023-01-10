import type { ElementType } from "react";

import { SizeTypes } from "~shared/consts";

export interface ClassName {
  readonly className: string;
}
export interface WithAsProps<As extends ElementType | string = ElementType> {
  readonly as?: As;
}

export type SizeType = typeof SizeTypes[number];
export interface Size {
  readonly size: SizeType;
}

export interface Title {
  readonly title: string;
}
export interface Description {
  readonly description: string;
}

export interface Src {
  readonly src: string;
}

export interface Id {
  readonly id: string;
}