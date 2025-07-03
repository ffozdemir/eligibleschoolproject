import { appConfig } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import "@/components/common/header/topbar.scss"


const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan">
          <i className="pi pi-megaphone"> {appConfig.project.slogan}</i>
        </div>
        <div>
          <i className="pi pi-user"> Login</i>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
