import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import LoginForm from "@/components/login/LoginForm";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader title="Login" />
      <Spacer />
      <LoginForm/>
      <Spacer />
    </>
  );
};

export default Page;
