//region Global Imports
import type { NextApiRequest, NextApiResponse } from "next";
//endregion

//region Local Imports
import { ServicesModel } from "~lib/services/types";
import mockServices from "~lib/services/mock-services.json";

//endregion

interface ApiServicesRequest extends NextApiRequest {
  body: { readonly id?: string };
}

export default function handler(
  { method, body: { id: serviceId } }: ApiServicesRequest,
  res: NextApiResponse<ServicesModel>
) {
  if (method === "GET") {
    // const findResults = mockServices.find((service) => service.id === serviceId);
    res.status(200).json(mockServices);
  } else {
    res.status(400).json([]);
  }
}
