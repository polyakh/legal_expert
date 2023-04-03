import { resolve } from 'path';

// @ts-check
import { locales, defaultLocal } from "./consts.js";
import { isDevelopmentENV } from "./utilities.js";

/**
 * @type {import('next-i18next').UserConfig}
 */
const localePath = typeof window === 'undefined' ? resolve('./public/locales') : 'locales';
export default {
  i18n: {
    defaultLocale: defaultLocal,
    locales: locales,
  },
  localePath,
};
