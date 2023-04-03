//region Local Imports
import { ServicesModel, ServiceModel } from "~lib/services/types";
import mockServices from "~public/mock-services.json";
//endregion

export function getServices(): ServicesModel {
  return mockServices;
}

export function getServiceById(id: string): ServiceModel | undefined {
  return mockServices.find((service) => service.id === id);
}