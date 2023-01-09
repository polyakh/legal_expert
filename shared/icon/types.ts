import type { ReactElement } from "react";
import type { SizeType } from "~typings";

export type Path = {
  readonly path: Record<SizeType, ReactElement>;
  readonly viewBox?: string;
};

export interface ViewBox {
  readonly viewBox: string
}
