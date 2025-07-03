import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/Logo";
import { appConfig } from "@/helpers/config";
import MainMenu from "../header/MainMenu";
import SocialMenu from "./SocialMenu";
import ContactMenu from "./ContactMenu";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Logo />
            <p>{appConfig.project.description}</p>
          </Col>
          <Col>
            <h3>Links</h3>
            <MainMenu className="flex-column" />
          </Col>
          <Col>
            <h3>Social</h3>
            <SocialMenu className="flex-column" />
          </Col>
          <Col>
            <h3>Contact</h3>
            <ContactMenu className="flex-column" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
