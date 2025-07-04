"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";
import { createContactAction } from "@/actions/contact-actions";
import { initialState } from "@/helpers/form-validation";
import { contact } from "@/helpers/entities/contact";
import { swAlert } from "@/helpers/swal";

const ContactForm = () => {
  const [formState, setFormState] = useState(contact);
  const [state, formAction] = useActionState(createContactAction, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.message) {
      if (state.ok) {
        swAlert(state.message, "success");
        setFormState(contact);
      } else {
        swAlert(state.message, "error");
      }
    }
  }, [state.message]);

  return (
    <div className="contact-form">
      <Form action={formAction}>
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
                isInvalid={!!state?.errors?.name}
                value={formState.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state?.errors?.name}
              </Form.Control.Feedback>
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
                isInvalid={!!state?.errors?.email}
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state?.errors?.email}
              </Form.Control.Feedback>
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
                isInvalid={!!state?.errors?.subject}
                value={formState.subject}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state?.errors?.subject}
              </Form.Control.Feedback>
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
                isInvalid={!!state?.errors?.message}
                value={formState.message}
                onChange={handleChange}
                rows={4}
              />
              <Form.Control.Feedback type="invalid">
                {state?.errors?.message}
              </Form.Control.Feedback>
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
