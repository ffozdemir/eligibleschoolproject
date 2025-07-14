import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import TeacherCreateForm from "@/components/dashboard/teacher/TeacherCreateForm";
import { getUnAssignedPrograms } from "@/services/program-service";

import React from "react";

const Page = async () => {
  const res = await getUnAssignedPrograms();
  const data = await res.json();

  if (!res.ok) throw new Error(data?.message || "Failed to fetch programs");

  const programs = data.map((item) => ({
    value: item.lessonProgramId,
    label: item.lessonName.map((lesson) => lesson.lessonName).join(", "),
  }));

  return (
    <>
      <PageHeader title="New Teacher" />
      <Spacer />
      <TeacherCreateForm programs={programs} />
      <Spacer />
    </>
  );
};

export default Page;
