"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { assistantSchema } from "@/helpers/schemas/assistant-schema";
import {
  createAssistant,
  deleteAssistant,
  updateAssistant,
} from "@/services/assistant-service";

import { revalidatePath } from "next/cache";

export const createAssistantAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    assistantSchema.validateSync(fields, { abortEarly: false });

    const res = await createAssistant(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/assistant-manager");
    return response(true, fields, "Assistant created successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};
export const updateAssistantAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    assistantSchema.validateSync(fields, { abortEarly: false });

    const res = await updateAssistant(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/assistant-manager");
    return response(true, fields, "Asssistant updated successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};

export const deleteAssistantAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  const res = await deleteAssistant(id);
  const data = await res.json();

  if (!res.ok) {
    return response(false, data?.message);
  }

  revalidatePath("/dashboard/assistant-manager");

  return response(true, {}, "Assistant deleted successfully");
};
