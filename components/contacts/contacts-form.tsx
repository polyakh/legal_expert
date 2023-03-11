import { z } from "zod";
//region Local Imports
import { TextField, Form, InputTypes, Button, Space } from "~components";
//endregion

const COMPONENT_KEY = "ContactsForm";

const formSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    userName: z.string().min(5).max(25),
  })
  .required();
type User = z.infer<typeof formSchema>;

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
            type={type}
          />
        ))}
        <Button type="submit">Submit</Button>
      </Space>
    </Form>
  );
}

export { COMPONENT_KEY };
export default ContactsForm;
