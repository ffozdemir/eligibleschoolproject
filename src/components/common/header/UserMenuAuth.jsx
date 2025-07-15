"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";

import ButtonLogOut from "./ButtonLogOut";
import { usePathname, useRouter } from "next/navigation";

const UserMenuAuth = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { name, role } = session.user;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUser = () => {
    return (
      <>
        <i className="pi pi-user"></i> {name}
      </>
    );
  };

  const userMenu = userMenuData[role.toLowerCase()];

  const handleClick = (url) => {
    handleClose();
    router.push(url);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        {getUser()}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{getUser()}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {userMenu.map((item) => (
              <button
                key={item.link}
                onClick={() => handleClick(item.link)}
                className={`nav-link text-start ${
                  pathname === item.link ? "active" : ""
                }`}
              >
                {item.title}
              </button>
            ))}
            <ButtonLogOut className="mt-4" />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserMenuAuth;
