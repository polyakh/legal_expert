import { Form, Title, ContactsForm, Container } from "~components";
import type { WithAsProps } from "~shared/typings";
const COMPONENT_KEY = "Contacts";

function Contacts({ as: Component = "div" }: WithAsProps) {
  return (
    <Component>
      <Container>
        <Title>Contacts</Title>
        <ContactsForm />
      </Container>
    </Component>
  );
}

export { COMPONENT_KEY };

export default Contacts;
