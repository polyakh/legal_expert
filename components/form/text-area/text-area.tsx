//region Local Imports
import type { WithAsProps, Value } from "~shared/typings";
import styles from "./text-area.module.css";

//endregion

interface TextAreaOwnProps extends WithAsProps, Value {}

const COMPONENT_KEY = "TextArea";

function TextArea({ as: Component = "textarea", value }: TextAreaOwnProps) {
  return <Component></Component>;
}

export { COMPONENT_KEY };
export default TextArea;
