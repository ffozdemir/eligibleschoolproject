import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactMenu from "../common/footer/ContactMenu";
import "./contact.scss";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col lg={8}>
            <h2>Send Message</h2>
            <ContactForm />
          </Col>
          <Col lg={4}>
            <h2>Get in touch</h2>
            <ContactMenu className="flex-column" />
          </Col>
        </Row>
      </Container>
      <ContactMap />
    </div>
  );
};

export default Contact;
