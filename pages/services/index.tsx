//region Global Imports
import React from "react";
import type {GetServerSideProps} from 'next';
//endregion

//region Local Imports
import {loadServices} from '~pages/api/services';
//endregion

const COMPONENT_KEY = "Services";

function Services() {
  return (
    <div>
      Services
    </div>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
export async function getStaticProps() {
  const services = await loadServices();
  return {props: {services}}
}

export {COMPONENT_KEY};
export default Services;
