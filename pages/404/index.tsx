//region Global Imports
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link, { type LinkProps } from "next/link";
import { useTranslation } from "next-i18next";
import HeadNext from "next/head";
//endregion

//region Local Imports
import { PATH_INDEX } from '~shared/consts'
import {GetStaticProps} from "next";
import * as console from "console";
const { defaultLocal, custom404NS } = require("~root/consts");

//endregion

const COMPONENT_KEY = "Custom404";

function Custom404() {
    const { t } = useTranslation(custom404NS as string)
    return (
        <div>
            <Link href={PATH_INDEX}>
                {t('backHome')}
            </Link>
        </div>
    );
}

export { COMPONENT_KEY };

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? defaultLocal, [custom404NS])),
    },
});
export default Custom404;
