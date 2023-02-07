import type { ElementType } from "react";

import { SizeTypes } from "~components/consts";

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

export interface Value {
  readonly value: string;
}

export interface Title {
  readonly title: string;
}

export interface Description {
  readonly description: string;
}

export interface HasComponentToShow {
  readonly hasComponentToShow?: boolean;
}
