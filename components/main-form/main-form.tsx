//region Local Imports
import type { ServicesModel } from "~lib/services/types";
import type { WithAsProps } from "~shared/typings";
import styles from "./services-list.module.css";
import { Card, NavLink } from "~components/ui";
import { PATH_SERVICES } from "~shared/consts";

//endregion
const COMPONENT_KEY = "MainForm";

type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// api
function MainForm({}) {
  const handelSubmitForm = async () => {
    // await api.
  };
  return <div className="max-w mx-auto"></div>;
}

export { COMPONENT_KEY };
export default MainForm;
