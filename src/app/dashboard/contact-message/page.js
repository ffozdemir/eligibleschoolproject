import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import { MessageList } from "@/components/dashboard/contact-message/MessageList";
import { getAllMessagesByPage } from "@/services/contact-service";

import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
  const { page } = await searchParams;

  const res = await getAllMessagesByPage(page);
  const data = await res.json();

  data.content = data.content.map((item, index) => ({ ...item, id: index }));

  if (!res.ok) throw new Error(data.message);

  return (
    <>
      <PageHeader title="Messages" />
      <Spacer />
      <MessageList data={data} />
      <Spacer />
    </>
  );
};

export default Page;
