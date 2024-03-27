"use server";
import { z } from "zod";

const usenameSchema = z.string().min(3).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  usenameSchema.parse(data.username);

  return {
    errors: ["wrong password", "pasword too short"],
  };
}
