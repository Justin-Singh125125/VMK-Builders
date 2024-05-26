import { Button } from './button';
import { Input } from './input';
import { TextArea } from './text-area';

export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Name" />
      <Input label="Email" />
      <TextArea label="Message" />
      <Button className="mt-4" type="submit">
        Send
      </Button>
    </form>
  );
};
