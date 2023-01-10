//region Global Imports
import React from "react";
//endregion

//region Local Imports
import { ServicesList } from './services-list'
//endregion

const COMPONENT_KEY = "Services";

function Services() {
    return (
        <div>
            <ServicesList />
        </div>
    );
}

export { COMPONENT_KEY };
export default Services;
