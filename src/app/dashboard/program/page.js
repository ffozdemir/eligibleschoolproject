import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import ProgramList from "@/components/dashboard/program/ProgramList";
import { getAllProgramsByPage } from "@/services/program-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllProgramsByPage(page);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch programs");

  return (
    <>
      <PageHeader title="Programs" />
      <Spacer />
      <ProgramList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
