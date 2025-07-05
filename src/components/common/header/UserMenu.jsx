import { auth } from "@/auth";
import React from "react";
import UserMenuGuest from "./UserMenuGuest";
import UserMenuAuth from "./UserMenuAuth";

const UserMenu = async () => {
  const session = await auth();
  return (
    <div>
      {session?.user ? <UserMenuAuth session={session} /> : <UserMenuGuest />}
    </div>
  );
};

export default UserMenu;
