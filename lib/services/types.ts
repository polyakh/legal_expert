import {Description, Title} from "~typings";

export interface ServiceModel extends Description, Title {
    readonly src: string;
}
