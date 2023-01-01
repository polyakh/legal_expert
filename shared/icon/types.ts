import type { ReactElement } from 'react';
import type { SizeTypes } from '~typings';
import { IconTypes } from '~shared/icon/consts';

export type Path = {
    readonly path: Record<SizeTypes, ReactElement>
    readonly viewBox?: string;
}

export type IconType = typeof IconTypes[number];