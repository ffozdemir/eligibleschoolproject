import Link from "next/link";
import React from "react";

const UserMenuGuest = () => {
  return (
    <Link href="/login" className="btn btn-secondary btn-sm">
      <i className="pi pi-user"></i>Login
    </Link>
  );
};

export default UserMenuGuest;
