import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import GradeList from "@/components/dashboard/grades-meet/GradeList";
import MeetList from "@/components/dashboard/grades-meet/MeetList";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllInfoForStudentByPage } from "@/services/student-info-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const dataGrades = (await getAllInfoForStudentByPage(page)).json();
  const dataMeets = (await getAllMeetsForStudent()).json();

  const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

  return (
    <>
      <PageHeader title="Grades &amp; Meets" />
      <Spacer />
      <GradeList grades={grades} />
      <Spacer />
      <MeetList meets={meets} />
      <Spacer />
    </>
  );
};

export default Page;
