//region Global Imports
import React from "react";
import type {PropsWithChildren} from "react";
//endregion

//region Local Imports
import {Header, Footer} from '~page/layout'
//endregion
const COMPONENT_KEY = "Layout";

function RootLayout({children}: PropsWithChildren<{}>) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default RootLayout
export {COMPONENT_KEY};