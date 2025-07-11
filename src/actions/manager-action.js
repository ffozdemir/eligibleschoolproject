"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { managerSchema } from "@/helpers/schemas/manager-schema";
import {
  createManager,
  deleteManager,
  updateManager,
} from "@/services/manager-service";

import { revalidatePath } from "next/cache";

export const createManagerAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    managerSchema.validateSync(fields, { abortEarly: false });

    const res = await createManager(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/manager");
    return response(true, fields, "Manager created successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};
export const updateManagerAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    managerSchema.validateSync(fields, { abortEarly: false });

    const res = await updateManager(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/manager");
    return response(true, fields, "Manager updated successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};

export const deleteManagerAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  const res = await deleteManager(id);
  const data = await res.json();

  if (!res.ok) {
    return response(false, {}, "Manager could not be deleted");
  }

  revalidatePath("/dashboard/manager");

  return response(true, {}, "Manager deleted successfully");
};
