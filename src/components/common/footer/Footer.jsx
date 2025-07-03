import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/Logo";
import { appConfig } from "@/helpers/config";
import MainMenu from "../header/MainMenu";
import SocialMenu from "./SocialMenu";
import ContactMenu from "./ContactMenu";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-4">
          <Col xs={12}>
            <Logo />
            <p className="mt-3">{appConfig.project.description}</p>
          </Col>
          <Col xs={6} lg>
            <h3>Links</h3>
            <MainMenu className="flex-column" />
          </Col>
          <Col xs={6} lg>
            <h3>Social</h3>
            <SocialMenu className="flex-column" />
          </Col>
          <Col lg>
            <h3>Contact</h3>
            <ContactMenu className="flex-column" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
