import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import MeetList from "@/components/dashboard/meet/MeetList";
import { getAllMeetsForAdvisorByPage } from "@/services/meet-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllMeetsForAdvisorByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch meets");

  return (
    <>
      <PageHeader title="Meeting" />
      <Spacer />
      <MeetList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
