import type { ServiceModel } from "./types";

export async function getProductBySlug(
  slug: string
): Promise<ServiceModel | undefined> {
  const services: ServiceModel[] = await (
    await fetch("/mock-services.json")
  ).json();

  const service = services.find((service) => service.slug === slug);

  return service;
}
export async function getServiceBySlugSafe(
  slug: string
): Promise<ServiceModel | null> {
  try {
    const service = await getProductBySlug(slug);

    if (!service) {
      throw new Error(`Service with slug '${slug}' not found`);
    }

    return service;
  } catch (error) {
    console.error(error);
    return null;
  }
}
