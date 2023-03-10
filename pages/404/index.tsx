//region Global Imports
import Link from "next/link";
//endregion

//region Local Imports
import { PATH_INDEX } from "~shared/consts";
//endregion

const COMPONENT_KEY = "Custom404";

function Custom404() {
  return (
    <div>
      <Link href={PATH_INDEX}>Custom404</Link>
    </div>
  );
}

export { COMPONENT_KEY };

export default Custom404;
