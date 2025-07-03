import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import Courses from "@/components/courses/Courses";
import React from "react";

export const metadata = {
  title: "Courses",
  description: "Explore our courses and learn new skills",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Courses" />
      <Spacer />
      <Courses featured={true} />
      <Spacer />
    </>
  );
};

export default Page;
