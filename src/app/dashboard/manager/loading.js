import LoadingList from "@/components/common/loaders/LoadingList";
import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import React from "react";

const Loading = async () => {
  return (
    <>
      <PageHeader title="Manager Management" />
      <Spacer />
      <LoadingList />
      <Spacer />
    </>
  );
};

export default Loading;
