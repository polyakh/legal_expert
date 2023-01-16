//region Global Imports
import React from "react";
//endregion

//region Local Imports
import type {WithAsProps} from "~shared/typings";
import {NavLink, Space} from "~components/ui";
import {ROUTES_PATH, type RoutesPath} from "~shared/consts";
import styles from "./navigation.module.css";

//endregion

interface NavigationOwnProps extends WithAsProps {
}

const COMPONENT_KEY = "Navigation";

function getRoutesPath(routesPath: RoutesPath = ROUTES_PATH) {
  return Object.values(routesPath);
}

function Navigation({as: Component = "div"}: NavigationOwnProps) {
  return (
    <Component role="navigation" className={styles.navigation}>
      <Space>
        {getRoutesPath().map((path: string) => (
          <NavLink href={path} key={path}>
            {path}
          </NavLink>
        ))}
      </Space>
    </Component>
  );
}

export {COMPONENT_KEY};
export type {NavigationOwnProps};
export default Navigation;
