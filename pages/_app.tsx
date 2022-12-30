//region Global Imports
import React from 'react';
import type { AppProps } from 'next/app';
//endregion

//region Local Imports
import { Layout } from './layout';
import '~styles/globals.css';
//endregion

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;