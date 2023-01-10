//region Global Imports
import React from "react";
const crypto = require('crypto')
//endregion

//region Local Imports
import { mockDataServices } from "./services-list.mocks";
import type { WithAsProps } from "~typings";
import styles from "./services-list.module.css";
import { Card } from "~shared/card";
//endregion

interface ServicesListOwnProps extends WithAsProps {}

const COMPONENT_KEY = "ServicesList";

type ArrayElementType<T> = T extends (infer E)[] ? E : T;

function ServicesList({ as: Component = "ul" }: ServicesListOwnProps) {
  const renderServices = () => {
    return mockDataServices.map((service, idx) => {
      return (
            <Card
                as={'li'}
                title={service.title}
                description={service.description}
                src={service.src} key={service.id}
            />
      )
    })
  };
  return (
    <Component className={styles.servicesList}>
      {renderServices()}
    </Component>
  );
}

export { COMPONENT_KEY };
export default ServicesList;
