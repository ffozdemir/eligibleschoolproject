import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import ManagerList from "@/components/dashboard/manager/ManagerList";
import { getAllManagersByPage } from "@/services/manager-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllManagersByPage(page);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch managers");

  return (
    <>
      <PageHeader title="Manager Management" />
      <Spacer />
      <ManagerList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
