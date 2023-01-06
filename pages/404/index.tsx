//region Global Imports
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link, { type LinkProps } from "next/link";
import HeadNext from "next/head";
//endregion

//region Local Imports
import { PATH_INDEX } from '~shared/consts'
import {GetStaticProps} from "next";
const { defaultLocal, custom404NS } = require("~root/consts");

//endregion

const COMPONENT_KEY = "Custom404";

function Custom404() {
    return (
        <div>
            <Link href={PATH_INDEX}>
                Custom404
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
