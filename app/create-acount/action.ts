"use server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(10),
  corfirmPassword: z.string().min(10),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  // formSchema.parse(data);
  const result = formSchema.safeParse(data); // safeParse 는 에러를 반환하지 않음

  if (!result.success) {
    return result.error.flatten();
  }
}
