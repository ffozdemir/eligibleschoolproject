"use client";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";

const ContactForm = () => {
  return (
    <div>
      <Form className="contact-form">
        <Row className="g-3">
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="name">
                <i className="pi pi-user"></i>
              </InputGroup.Text>
              <Form.Control
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                aria-describedby="name"
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="email">
                <i className="pi pi-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="email"
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="subject">
                <i className="pi pi-tag"></i>
              </InputGroup.Text>
              <Form.Control
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                aria-describedby="subject"
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="message">
                <i className="pi pi-comment"></i>
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                aria-describedby="message"
                rows={4}
              />
            </InputGroup>
          </Col>
        </Row>
        <Button type="submit" variant="outline-secondary">
          <i className="pi pi-send"></i> Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
