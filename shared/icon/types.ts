import type { ReactElement } from 'react'
import type { SizeTypes } from '~typings'

export type Path = {
    readonly path: Record<SizeTypes, ReactElement>
}