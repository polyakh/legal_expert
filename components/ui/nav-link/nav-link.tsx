//region Global Imports
import {useState, useEffect, type AnchorHTMLAttributes} from "react";
import Link, {type LinkProps} from "next/link";
import {useRouter} from "next/router";
//endregion

//region Local Imports
import styles from "./nav-link.module.css";
import { getClassNames } from "~components/utilities";
//endregion

const BLANK = "_blank";
interface NavLinkOwnProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, LinkProps {
  readonly activeClassName?: string;
}

const COMPONENT_KEY = "NavLink";



// https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
function NavLink({
                   children,
                   activeClassName = styles.navLink_active,
                   className = styles.navLink,
                   target,
                   rel: relProp,
                   ...restProps
                 }: NavLinkOwnProps) {
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
          ? getClassNames(className, activeClassName)
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
  const rel = target === BLANK ? { rel: "noopener noreferrer" } : {...(relProp ? {rel: relProp}: {})};
  return (
    <Link className={computedClassName} {...rel} {...restProps}>
      {children}
    </Link>
  );
}

export {COMPONENT_KEY};
export default NavLink;
