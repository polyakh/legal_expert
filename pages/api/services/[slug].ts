import type { NextApiRequest, NextApiResponse } from "next";
import { getServiceBySlugSafe } from "~lib/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  const service = await getServiceBySlugSafe(slug as string);

  if (!service) {
    res.status(404).json({ message: `Service with slug '${slug}' not found` });
  } else {
    res.status(200).json(service);
  }
}
