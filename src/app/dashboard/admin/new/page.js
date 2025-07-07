import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AdminCreateForm from "@/components/dashboard/admin/AdminCreateForm";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="Create Admin" />
      <Spacer />
      <AdminCreateForm />
      <Spacer />
    </>
  );
};

export default Page;
