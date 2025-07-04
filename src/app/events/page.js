import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import Events from "@/components/events/Events";
import React from "react";

export const metadata = {
  title: "Events",
  description:
    "Discover the exciting events and activities happening at our educational institution.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Events" />
      <Spacer />
      <Events />
      <Spacer />
    </>
  );
};

export default Page;
