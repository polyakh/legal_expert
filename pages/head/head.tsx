//region Global Imports
import HeadNext from "next/head";
//endregion

//region Local Imports
import { appName } from "~shared/consts";
//endregion

const COMPONENT_KEY = "Head";

function Head() {
  return (
    <HeadNext>
      <title>{appName}</title>
    </HeadNext>
  );
}

export { COMPONENT_KEY };
export default Head;
