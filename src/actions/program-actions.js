"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { programSchema } from "@/helpers/schemas/program-schema";
import { createProgram, deleteProgram } from "@/services/program-service";

import { revalidatePath } from "next/cache";

export const createProgramAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    programSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      lessonIdList: JSON.parse(fields.lessonIdList),
    };

    const res = await createProgram(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/program");
    return response(true, fields, "Program created successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};

export const deleteProgramAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  const res = await deleteProgram(id);
  const data = await res.json();

  if (!res.ok) {
    return response(false, {}, "Program could not be deleted");
  }

  revalidatePath("/dashboard/program");

  return response(true, {}, "Program deleted successfully");
};
