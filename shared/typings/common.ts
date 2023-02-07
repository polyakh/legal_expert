import { profiles } from "~shared/consts";

export type ProfilesKeys = keyof typeof profiles;

export interface Slug {
  readonly slug: string;
}

export interface Name {
  readonly name: string;
}

export interface Url {
  readonly url: string;
}

export interface Id {
  readonly id: string;
}
