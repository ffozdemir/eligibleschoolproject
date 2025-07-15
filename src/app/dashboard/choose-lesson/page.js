import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import AllProgramList from "@/components/dashboard/choose-lesson/AllProgramList";
import StudentProgramList from "@/components/dashboard/choose-lesson/StudentProgramList";
import {
  getAllPrograms,
  getProgramsByStudent,
} from "@/services/program-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const dataAllPrograms = (await getAllPrograms()).json();
  const dataStudentPrograms = (await getProgramsByStudent()).json();

  const [allPrograms, studentPrograms] = await Promise.all([
    dataAllPrograms,
    dataStudentPrograms,
  ]);

  return (
    <>
      <PageHeader title="Choose Lesson" />
      <Spacer />
      <AllProgramList allPrograms={allPrograms} />
      <Spacer />
      <StudentProgramList studentPrograms={studentPrograms} />
      <Spacer />
    </>
  );
};

export default Page;
