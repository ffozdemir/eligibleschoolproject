import LoadingList from "@/components/common/loaders/LoadingList";
import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import React from "react";

const Loading = async () => {
  return (
    <>
      <PageHeader title="Choose Lesson" />
      <Spacer />
      <LoadingList colCount={7} />
      <Spacer />
    </>
  );
};

export default Loading;
