"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createMessage } from "@/services/contact-service";

export const createContactAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);
  try {
    ContactSchema.validateSync(fields, { abortEarly: false });
    const res = await createMessage(fields);
    const data = await res.json();
    if (!res.ok) {
      return response(false, fields, "", data?.validations);
    }

    //revalidation will be handled at the future

    return response(true, fields, "Contact message created successfully", null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner , fields);
    }
    throw error;
  }
};
