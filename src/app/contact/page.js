import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import Contact from "@/components/contact/Contact";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us for any inquiries or support related to our services.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Spacer />
      <Contact />
    </>
  );
};

export default Page;
