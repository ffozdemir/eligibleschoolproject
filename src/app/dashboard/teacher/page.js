import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import TeacherList from "@/components/dashboard/teacher/TeacherList";
import { getAllTeachersByPage } from "@/services/teacher-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllTeachersByPage(page);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch managers");

  return (
    <>
      <PageHeader title="Teacher" />
      <Spacer />
      <TeacherList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
