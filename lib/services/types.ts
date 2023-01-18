import {Id, Title, Slug, Description, Url} from "~shared/typings";

// The title for a page might be the slug for it, if it is URL encoded.
export interface ServiceModel extends Id, Title, Slug, Description, Url {
  readonly otherServiceDetails: string;
}

export type ServicesModel = ReadonlyArray<ServiceModel>;
