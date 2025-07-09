import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AssistantCreateForm from "@/components/dashboard/assistant/AssistantCreateForm";

import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="New Assistant" />
      <Spacer />
      <AssistantCreateForm />
      <Spacer />
    </>
  );
};

export default Page;
