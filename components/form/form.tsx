//region Global Imports
import {
  type FormHTMLAttributes,
  type FormEventHandler,
  forwardRef,
  useCallback,
} from "react";
//endregion

//region Local Imports
import type { WithAsProps } from "~shared/typings";
import styles from "./form.module.css";
//endregion

interface FormOwnProps
  extends FormHTMLAttributes<HTMLFormElement>,
    WithAsProps {
  readonly isPreventDefault?: boolean;
}

const COMPONENT_KEY = "Form";

const Form = forwardRef<HTMLFormElement, FormOwnProps>(function Form(
  { as: Component = "form", isPreventDefault = false, onSubmit, children },
  ref
) {
  const handleOnSubmitForm = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      if (!isPreventDefault) {
        event.preventDefault();
      }

      if (onSubmit) {
        onSubmit(event);
      }
    },
    [isPreventDefault, onSubmit]
  );

  return (
    <Component
      onSubmit={handleOnSubmitForm}
      ref={ref}
      autoComplete="none"
      className={styles.form}
    >
      {children}
    </Component>
  );
});

export { COMPONENT_KEY };
export default Form;
