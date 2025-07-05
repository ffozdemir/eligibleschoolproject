import { appConfig } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import "@/components/common/header/topbar.scss"
import UserMenu from "./UserMenu";


const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan">
          <i className="pi pi-megaphone"> {appConfig.project.slogan}</i>
        </div>
        <UserMenu/>
      </Container>
    </div>
  );
};

export default Topbar;
