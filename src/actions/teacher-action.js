"use server";

import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { managerSchema } from "@/helpers/schemas/manager-schema";
import { programAssignmentSchema } from "@/helpers/schemas/program-assignment-schema";
import { teacherSchema } from "@/helpers/schemas/teacher-schema";
import {
  assignProgramToTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "@/services/teacher-service";

import { revalidatePath } from "next/cache";

export const createTeacherAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    teacherSchema.validateSync(fields, { abortEarly: false });

   	const payload = {
      ...fields,
      lessonsIdList: JSON.parse(fields.lessonsIdList),
    };

    const res = await createTeacher(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/teacher");
    revalidatePath("/dashboard/program");
    
    return response(true, fields, "Teacher created successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};
export const updateTeacherAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    managerSchema.validateSync(fields, { abortEarly: false });


    const payload = {
      ...fields,
      lessonsIdList: JSON.parse(fields.lessonsIdList),
    };

    const res = await updateTeacher(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/teacher");
    revalidatePath("/dashboard/program");

    return response(true, fields, "Teacher updated successfully");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};


export const assignProgramToTeacherAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    programAssignmentSchema.validateSync(fields, { abortEarly: false });

    fields.lessonProgramId = JSON.parse(fields.lessonProgramId);

    const payload = {
      ...fields,
      lessonProgramId: fields.lessonProgramId.map(
        (item) => item.lessonProgramId
      ),
    };

    const res = await assignProgramToTeacher(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(false, fields, data?.message, data?.validations);
    }

    revalidatePath("/dashboard/program");
    return response(true, fields, "Program assigned to the teacher");
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    }

    throw err;
  }
};



export const deleteTeacherAction = async (id) => {
  if (!id) throw new Error("Id is missing");

  const res = await deleteTeacher(id);
  const data = await res.json();

  if (!res.ok) {
    return response(false, {}, "Teacher could not be deleted");
  }

  revalidatePath("/dashboard/teacher");

  return response(true, {}, "Teacher deleted successfully");
};
