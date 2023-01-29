//region Local Imports
import type {WithAsProps} from "~shared/typings";
import {TextField, Form, InputTypes, Button} from "~components";
//endregion


const COMPONENT_KEY = "ContactsForm";


function ContactsForm({as: Component = "div"}: WithAsProps) {
  const handleFormSubmit = () => {}
  return (
    <Form onSubmit={handleFormSubmit}>
      {InputTypes.map(type =>  <TextField
        key={type}
        placeholder={`Enter a ${type}`}
        required
      />)}
      <Button>Submit</Button>
    </Form>
  );
}

export {COMPONENT_KEY};
export default ContactsForm;
