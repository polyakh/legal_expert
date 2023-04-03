import type { ServicesModel } from "~lib/services/types";
import { ServicesList } from "~components/services";
import { getServiceById, getServices } from "~pages/api/services";

const ServicePage = ({service}: any) => {
  return (
    <div>
      <h1>Service: {service.id}</h1>
    </div>
  );
};

export default ServicePage;

export async function getStaticPaths() {
  const services = getServices();
  const paths = services.map((service) => ({
    params: { id: service.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const service = getServiceById(params.id);
  return {
    props: {
      service,
    },
  };
}