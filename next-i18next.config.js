// @ts-check
import { locales, defaultLocal } from "./consts";
import { isDevelopmentENV } from "./utilities";

/**
 * @type {import('next-i18next').UserConfig}
 */
export const i18n = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: isDevelopmentENV(), // isDev => ut
  i18n: {
    defaultLocale: defaultLocal,
    locales: locales,
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "locales",

  reloadOnPrerender: isDevelopmentENV(),

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
};
