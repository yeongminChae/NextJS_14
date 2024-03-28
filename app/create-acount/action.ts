"use server";
import { z } from "zod";

const passwordRegex = new RegExp( // 비밀번호가 대문자, 소문자, 숫자, 특수문자를 모두 포함하는지 확인하는 정규식
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => !username.includes("potato");
// 화살표 함수에서 '=>' 뒤에 중괄호를 사용하면 return을 사용해야 한다, '=>' 는 return을 암시하고 있기에 생략할 수 있다.

const checkPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string",
        required_error: "Pleast Input your Username",
      })
      .min(3, "Way too short")
      .max(20, "This is too long")
      .toLowerCase()
      .trim()
      .transform((username) => `🔥${username}!`)
      .refine(checkUsername, "No Potatoes allowed!"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .toLowerCase()
      .trim() // 공백제거
      .regex(
        passwordRegex,
        "Password must have lower case, upper case, number, and special character"
      ),
    confirmPassword: z.string().min(4),
  })
  .refine(checkPassword, {
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
  } else {
    result.data;
  }
}
