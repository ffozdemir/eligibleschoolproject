import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AdminList from "@/components/dashboard/admin/AdminList";
import { getAllAdminsByPage } from "@/services/admin-service";
import React from "react";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllAdminsByPage(page, 20);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch admins");

  return (
    <>
      <PageHeader title="Admin Management" />
      <Spacer />
      <AdminList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
