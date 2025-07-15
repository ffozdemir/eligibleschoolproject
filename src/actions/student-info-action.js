"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { studentInfoSchema } from "@/helpers/schemas/student-info-schema";
import {
  createStudentInfo,
  deleteStudentInfo,
  updateStudentInfo,
} from "@/services/student-info-service";

import { revalidatePath } from "next/cache";

export const createStudentInfoAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    studentInfoSchema.validateSync(fields, { abortEarly: false });

    const res = await createStudentInfo(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/student-info");
    return response(true, fields, "Student Info created");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};

export const updateStudentInfoAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    studentInfoSchema.validateSync(fields, { abortEarly: false });

    const res = await updateStudentInfo(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/student-info");
    return response(true, fields, "Student Info updated");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};

export const deleteStudentInfoAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  const res = await deleteStudentInfo(id);
  const data = await res.json();

  if (!res.ok) {
    return response(false, {}, "Student Info could not be deleted");
  }

  revalidatePath("/dashboard/student-info");

  return response(true, {}, "Student Info deleted");
};
