//region Global Imports
import React from "react";
//endregion

//region Local Imports
import { WithAsProps } from "~typings";
import { NavLink, ROUTES_PATH, type RoutesPath, Space } from "~shared";
import styles from "./navigation.module.css";
//endregion

interface NavigationOwnProps extends WithAsProps {}

const COMPONENT_KEY = "Navigation";

function getRoutesPath(routesPath: RoutesPath = ROUTES_PATH) {
  return Object.values(routesPath);
}

function Navigation({ as: Component = "div" }: NavigationOwnProps) {
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

export { COMPONENT_KEY };
export type { NavigationOwnProps };
export default Navigation;
