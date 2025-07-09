import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import LessonCreateForm from "@/components/dashboard/lesson/LessonCreateForm";

import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="New Term" />
      <Spacer />
      <LessonCreateForm />
      <Spacer />
    </>
  );
};

export default Page;
