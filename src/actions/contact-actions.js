"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createMessage } from "@/services/contact-service";
import { transform } from "next/dist/build/swc/generated-native";

export const createContactAction = async (prevState, formData) => {
  try {
    const fields = convertFormDataToJSON(formData);
    ContactSchema.validateSync(fields, { abortEarly: false });
    const res = await createMessage(fields);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to create contact message");
    }

    //revalidation will be handled at the future

    return response(true, "Contact message created successfully", null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  }
};
