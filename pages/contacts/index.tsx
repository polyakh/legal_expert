//region Global Imports
import React from "react";
import HeadNext from "next/head";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
//endregion

//region Local Imports
const { defaultLocal, commonNS } = require("~root/consts");
//endregion

const COMPONENT_KEY = "Contacts";

function Contacts() {
    return (
        <div>
            contacts
        </div>
    );
}

export { COMPONENT_KEY };

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? defaultLocal, [commonNS])),
    },
});
export default Contacts;
