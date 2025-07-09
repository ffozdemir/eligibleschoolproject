import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import TermCreateForm from "@/components/dashboard/term/TermCreateForm";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="New Term" />
      <Spacer />
      <TermCreateForm />
      <Spacer />
    </>
  );
};

export default Page;
