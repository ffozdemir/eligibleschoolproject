import { LoadingForm } from "@/components/common/loaders/LoadingForm";
import LoadingList from "@/components/common/loaders/LoadingList";
import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import React from "react";

const Loading = async () => {
  return (
    <>
      <PageHeader title="Messages" />
      <Spacer />
      <LoadingForm inputCount={6} />
      <Spacer />
    </>
  );
};

export default Loading;
