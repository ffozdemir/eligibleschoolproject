"use server";

import { signIn, signOut } from "@/auth";
import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { AuthError } from "next-auth";

export const loginAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);
  try {
    AuthSchema.validateSync(fields, { abortEarly: false });

    await signIn("credentials", fields); //with auth.js from next-auth, we will use the signIn function to handle the login process
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner, fields);
    } else if (error instanceof AuthError) {
      return response(false, fields, "Invalid credentials, please try again.");
    }
    throw error;
  }
};

export const logoutAction = async (redirectTo = "/") => {
  await signOut({ redirectTo });
};
