import {Id, Name, Slug, Description, Url} from "~shared/typings";

export interface ServiceModel extends Id, Name, Slug, Description, Url {
  readonly otherServiceDetails: string;
}

export type ServicesModel = ReadonlyArray<ServiceModel>;
