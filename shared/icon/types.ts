import type { ReactElement } from 'react';
import type { SizeType } from '~typings';
import { IconTypes } from '~shared/icon/consts';

export type Path = {
    readonly path: Record<SizeType, ReactElement>
    readonly viewBox?: string;
}

