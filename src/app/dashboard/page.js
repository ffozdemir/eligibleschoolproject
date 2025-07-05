import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import DashboardNavigation from "@/components/dashboard/home/DashboardNavigation";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Spacer />
      <DashboardNavigation />
      <Spacer />
    </>
  );
};

export default Page;
