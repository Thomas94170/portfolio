import { useForm, ValidationError } from "@formspree/react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xjvzllob");

  if (state.succeeded) {
    return (
      <Typography variant="h6" color="green" className="text-center">
        Merci pour votre message ! Je vous répondrai dès que possible.
      </Typography>
    );
  }

  return (
    <Card color="transparent" shadow={false}>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-full max-w-screen-lg"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Nom" name="name" />
          <Input size="lg" label="Email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Textarea label="Message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button
          type="submit"
          className="mt-6"
          fullWidth
          disabled={state.submitting}
        >
          Envoyer
        </Button>
      </form>
    </Card>
  );
}
