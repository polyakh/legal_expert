//region Global Imports
import React, {useState, useEffect, type PropsWithChildren} from "react";
import Link, {type LinkProps} from "next/link";
import {useRouter} from "next/router";
//endregion

//region Local Imports
import styles from "./nav-link.module.css";
//endregion

const COMPONENT_KEY = "NavLink";

// https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
function NavLink({
                   children,
                   activeClassName = styles.navLink_active,
                   className = styles.navLink,
                   ...restProps
                 }: PropsWithChildren<
  {
    readonly className?: string;
    readonly activeClassName?: string;
  } & LinkProps
>) {
  const {asPath, isReady} = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);
  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (restProps.as || restProps.href) as string,
        location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    restProps.as,
    restProps.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...restProps}>
      {children}
    </Link>
  );
}

export {COMPONENT_KEY};
export default NavLink;
