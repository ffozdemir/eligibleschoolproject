"use server";

import { response } from "@/helpers/form-validation";
import { deleteAdmin } from "@/services/admin-service";

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
