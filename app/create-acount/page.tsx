"use client";
import FormBtn from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";
import Input from "@/components/input";

export default function CreateAccountPage() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={20}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
          minLength={4}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Comfirm Password"
          required
          errors={state?.fieldErrors.confirmPassword}
          minLength={4}
        />
        <FormBtn text={"Create Account"} />
        <SocialLogin />
      </form>
    </div>
  );
}
