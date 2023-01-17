//region Global Imports
import React from "react";
import type {GetStaticProps} from 'next';
//endregion

//region Local Imports
import type {ServicesModel} from '~lib/services/types';
import {PATH_SERVICES} from '~shared/consts/routes-path';
import {ServicesList} from '~components/services';
//endregion
const COMPONENT_KEY = "Services";


export type Results = {
  services: ServicesModel;
}

function Services({services}: Results) {
  return (
    <ServicesList services={services}/>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
// TODO This produces an additional call, reducing performance. Add types for getStaticProps(): {}
export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}${PATH_SERVICES}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST'
  });
  const services = await response.json();
  return {
    props: {
      services
    }
  }
}

export {COMPONENT_KEY};
export default Services;
