//region Global Imports
import React from "react";
import NextLink from "next/link";
//endregion

//region Local Imports
import type {ServicesModel} from "~lib/services/types";
import type {WithAsProps} from "~shared/typings";
import styles from "./services-list.module.css";
import {Card} from "~components/ui/card";
import {PATH_SERVICES} from "~shared/consts";

//endregion

interface ServicesListOwnProps<T> extends WithAsProps {
  readonly services: T;
}

const COMPONENT_KEY = "ServicesList";

type ArrayElementType<T> = T extends (infer E)[] ? E : T;

function ServicesList<T extends ServicesModel>({as: Component = "div", services}: ServicesListOwnProps<T>) {
  const renderServices = () => {
    return services.map((service) => {
      return (
        <NextLink
          key={service.id}
          href={`${PATH_SERVICES}[slug]`}
          as={`${PATH_SERVICES}${service.slug}`}
        >
          <Card
            as={'li'}
            title={service.title}
            description={service.description}
            src={service.url}

          />
        </NextLink>
      )
    })
  };
  return (
    <Component className='max-w mx-auto'>
      <ul className={styles.servicesList}>
        {renderServices()}
      </ul>
    </Component>
  );
}

export {COMPONENT_KEY};
export default ServicesList;
