"use server";
import { z } from "zod";

function checkUsername(username: string) {
  return !username.includes("potato");
}

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string",
        required_error: "Pleast Input your Username",
      })
      .min(3, "Way too short")
      .max(20, "This is too long")
      .refine(
        (username) => !username.includes("potato"),
        "No Potatoes allowed!"
        // 다른 방식으로 작성 가능
        // (username) => (username.includes("potato") ? false : true),
        // "No Potatoes allowed!"
      ),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }
}
