"use client";
import { appConfig } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const menuItems = Object.entries(appConfig.contact.socialMedia);

const SocialMenu = (props) => {
  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link key={item[0]} href={item[1].url}>
          <i className={item[1].icon}> {item[0]}</i>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default SocialMenu;
