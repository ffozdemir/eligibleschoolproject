import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AssistantEditForm from "@/components/dashboard/assistant/AssistantEditForm";
import { getAssistantById } from "@/services/assistant-service";

import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  const res = await getAssistantById(id);
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Failed to fetch manager");
  return (
    <>
      <PageHeader title="Edit Assistant" />
      <Spacer />
      <AssistantEditForm user={data?.object} />
      <Spacer />
    </>
  );
};

export default Page;
