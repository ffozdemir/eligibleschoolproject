import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import StudenInfoList from "@/components/dashboard/student-info/StudentInfoList";
import { getAllInfoForTeacherByPage } from "@/services/student-info-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllInfoForTeacherByPage(page);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch managers");

  return (
    <>
      <PageHeader title="Student Info" />
      <Spacer />
      <StudenInfoList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
