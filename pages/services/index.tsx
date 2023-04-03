//region Local Imports
import type { ServicesModel } from "~lib/services/types";
import { ServicesList } from "~components/services";
import { getServices } from "~pages/api/services";
//endregion

const COMPONENT_KEY = "Services";

export type Results = {
  services: ServicesModel;
};

function Services({services}: {services: ServicesModel}) {
  return <ServicesList services={services} />;
}

export async function getStaticProps() {
  const services = getServices();
  return {
    props: {
      services,
    },
  };
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
// TODO This produces an additional call, reducing performance. Add types for getStaticProps(): {}
export { COMPONENT_KEY };
export default Services;

