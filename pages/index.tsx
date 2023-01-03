//region Global Imports
import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//endregion

//region Local Imports
import { Head } from './head';
//endregion
const COMPONENT_KEY = "IndexPage";

function IndexPage() {
    return (
        <div className='page-container'>
            <Head/>
            <p>IndexPage</p>
        </div>
    )
}

export const getStaticProps: GetStaticProps<{}> = async ({
                                                                locale,
                                                         }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
        ])),
    },
})
export default IndexPage;

export { COMPONENT_KEY };