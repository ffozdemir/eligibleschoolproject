import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import StudentCreateForm from "@/components/dashboard/student/StudentCreateForm";

import { getAllAdvisorTeachers } from "@/services/teacher-service";

import React from "react";

const Page = async () => {
  const res = await getAllAdvisorTeachers();
  const data = await res.json();

  const teachers = data.map((item) => ({
    value: item.advisorTeacherId,
    label: `${item.teacherName} ${item.teacherSurname}`,
  }));

  return (
    <>
      <PageHeader title="New Student" />
      <Spacer />
      <StudentCreateForm teachers={teachers} />
      <Spacer />
    </>
  );
};

export default Page;
