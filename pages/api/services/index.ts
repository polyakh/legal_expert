import type {NextApiRequest, NextApiResponse} from 'next';


//region Local Imports
import {ServicesModel} from '~lib/services/types';
import {BASE_API_PATH} from "~pages/api/consts";

//endregion

interface ApiServicesRequest extends NextApiRequest {
  body: { readonly services?: ServicesModel };
}

export async function loadServices() {
  const response = await fetch(`${process.env.API_URL}/api/services`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const services = await response.json()
  return {
    props: {
      services,
    },
  };
}
