import { Form, Title, ContactsForm } from "~components";
import type { WithAsProps } from "~shared/typings";
const COMPONENT_KEY = "Contacts";

function Contacts({ as: Component = "div" }: WithAsProps) {
  return (
    <Component>
      <Title>Contacts</Title>
      <ContactsForm />
    </Component>
  );
}

export { COMPONENT_KEY };

export default Contacts;
