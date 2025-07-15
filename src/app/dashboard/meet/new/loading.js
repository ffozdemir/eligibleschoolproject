import { LoadingForm } from "@/components/common/loaders/LoadingForm";
import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import React from "react";

const Loading = async () => {
  return (
    <>
      <PageHeader title="New Meet" />
      <Spacer />
      <LoadingForm />
      <Spacer />
    </>
  );
};

export default Loading;
