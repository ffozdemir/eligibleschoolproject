import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import MeetCreateForm from "@/components/dashboard/meet/MeetCreateForm";
import StudentInfoCreateForm from "@/components/dashboard/student-info/StudentInfoCreateForm";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async () => {
  const res = await getAllStudentsByAdvisor();
  const data = await res.json();

  let newStudents = [];

  if (Array.isArray(data)) {
    newStudents = data.map((item) => ({
      value: item.userId,
      label: `${item.name} ${item.surname}`,
    }));
  }


  return (
    <>
      <PageHeader title="New Meet" />
      <Spacer />
      <MeetCreateForm students={newStudents} />
      <Spacer />
    </>
  );
};

export default Page;
