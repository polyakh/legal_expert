import { sizeOptions } from './consts';
export function parseElementProps({iconPath, size, viewBox, name }: any) {
    // @ts-ignore
    let computedSize = sizeOptions[size];
    return ({

        viewBox: viewBox ?? `0 0 ${computedSize} ${computedSize}`,
        // @ts-ignore
        width: computedSize,
        height: computedSize,
        focusable: false,
        path: iconPath,
        "data-icon": name,
        className: 'icon'
    })
}