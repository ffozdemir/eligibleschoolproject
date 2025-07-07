"use client";
import { logoutAction } from "@/actions/auth-action";
import { swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";

const ButtonLogOut = (props) => {
  const handleLogout = async () => {
    const res = await swConfirm("Are you sure you want to log out?");
    if (!res.isConfirmed) return; // If the user cancels, do nothing
    await logoutAction();
  };

  return (
    <Button {...props} onClick={handleLogout}>
      <i className="pi pi-sign-out"></i> LOGOUT
    </Button>
  );
};

export default ButtonLogOut;
