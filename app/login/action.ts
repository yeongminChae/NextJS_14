"use server";

import { error } from "console";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(formData);

  return {
    errors: ["wrong password", "pasword too short"],
  };
}
