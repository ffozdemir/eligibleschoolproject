"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { adminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";

export const createAdminAction = async (prevState, formData) => {
  try {
    const fields = convertFormDataToJSON(formData);
    adminSchema.validateSync(fields, {
      abortEarly: false,
    });
    const data = await createAdmin(fields);
    const res = await data.json();
    if (!res.ok) {
      return response(false, data?.message || "Failed to create admin");
    }
    //REVALIDATION
    return response(true, data?.message || "Admin created successfully");
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    throw error;
  }
};

export const deleteAdminAction = async (id) => {
  if (!id) {
    throw new Error("Admin ID is required for deletion");
  }
  const res = await deleteAdmin(id);
  const data = await res.text();
  if (!res.ok) {
    return response(false, data || "Failed to delete admin");
  }
  //revalidate
  return response(true, data || "Admin deleted successfully");
};
