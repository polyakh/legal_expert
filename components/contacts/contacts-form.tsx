//region Local Imports
import { TextField, Form, InputTypes, Button, Space } from "~components";
//endregion

const COMPONENT_KEY = "ContactsForm";

function ContactsForm({}) {
  const handleFormSubmit = () => {};
  return (
    <Form onSubmit={handleFormSubmit}>
      <Space isDirectionColumn>
        {InputTypes.map((type) => (
          <TextField
            aria-describedby={type}
            key={type}
            placeholder={`Enter a ${type}`}
            required
          />
        ))}
        <Button>Submit</Button>
      </Space>
    </Form>
  );
}

export { COMPONENT_KEY };
export default ContactsForm;
