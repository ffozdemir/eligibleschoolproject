import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import TermList from "@/components/dashboard/term/TermList";
import { getAllTermsByPage } from "@/services/term-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllTermsByPage(page);
  const data = await res.json();


  if (!res.ok) throw new Error(data.message || "Failed to fetch admins");

  return (
    <>
      <PageHeader title="Education Terms" />
      <Spacer />
      <TermList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
