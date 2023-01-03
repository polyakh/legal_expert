export const defaultLocal = 'uk';
export const commonNS = 'common';

module.exports = {
    i18n: {
        defaultLocale: defaultLocal,
        locales: [defaultLocal, 'pl'],
        localePath: typeof window === "undefined" ? "../../public/locales" : "../../locales",
    },
}