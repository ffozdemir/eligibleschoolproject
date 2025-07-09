import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import ManagerCreateForm from "@/components/dashboard/manager/ManagerCreateForm";

import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="New Manager" />
      <Spacer />
     <ManagerCreateForm/>
      <Spacer />
    </>
  );
};

export default Page;
