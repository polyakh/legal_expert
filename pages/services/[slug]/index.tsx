import { GetStaticProps, GetStaticPaths } from "next";
import {
  getErrorMessage,
  type Id,
  type Name,
  type Title,
  type Description,
  type Slug,
  type Url,
} from "~shared";

interface Service extends Name, Id, Title, Description, Slug, Url {
  readonly name: string;
}

const ServicePage = (props: any) => {
  console.log({ props });
  return (
    <div>
      <h1>Service: {props.title}</h1>
    </div>
  );
};

export default ServicePage;
