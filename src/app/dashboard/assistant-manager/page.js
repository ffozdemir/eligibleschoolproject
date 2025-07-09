import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AssistantList from "@/components/dashboard/assistant/AssistantList";
import { getAllAssistantsByPage } from "@/services/assistant-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllAssistantsByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch assistants");

  return (
    <>
      <PageHeader title="Assistant Management" />
      <Spacer />
      <AssistantList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
