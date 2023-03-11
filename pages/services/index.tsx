//region Global Imports
import type { GetStaticProps } from "next";
import { useState, useEffect } from "react";
//endregion

//region Local Imports
import type { ServicesModel } from "~lib/services/types";
import { PATH_SERVICES } from "~shared/consts/routes-path";
import { getErrorMessage } from "~shared/utilities";
import { ServicesList } from "~components/services";
//endregion
const COMPONENT_KEY = "Services";

export type Results = {
  services: ServicesModel;
};

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/mock-services.json");
      const data = await res.json();
      setServices(data);
    }
    fetchPosts();
  }, []);

  return <ServicesList services={services} />;
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
// TODO This produces an additional call, reducing performance. Add types for getStaticProps(): {}
export { COMPONENT_KEY };
export default Services;
