import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import LessonList from "@/components/dashboard/lesson/LessonList";
import { getAllLessonsByPage } from "@/services/lesson-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllLessonsByPage(page);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch admins");

  return (
    <>
      <PageHeader title="Lessons" />
      <Spacer />
      <LessonList data={data}/>
      <Spacer />
    </>
  );
};

export default Page;
