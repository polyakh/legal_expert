export const shapeDefault = 'default';
export const shapeCircle = 'circle';
export const shapeRound = 'round';
export const ShapeTypes = [shapeDefault,
shapeCircle,
shapeRound] as const;

export const kind = {
    primary: '0',
    circle: '50%',
    round: '0.5rem',
} as const;
export const defaultButtonType = 'button' as const;
