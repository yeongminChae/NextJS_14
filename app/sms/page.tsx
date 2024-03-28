import Button from "@/components/button";
import Input from "@/components/input";
import { smsLogin } from "./action";
import { useFormState } from "react-dom";

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login!</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="phone"
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
          minLength={100000}
          maxLength={999999}
          errors={[]}
        />
        <Button text={"Verify"} />
      </form>
    </div>
  );
}
