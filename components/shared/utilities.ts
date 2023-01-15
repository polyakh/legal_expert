export const tupleNumOrStr = <T extends number[] | string[]>(...args: T): number[] | string[] => args;
