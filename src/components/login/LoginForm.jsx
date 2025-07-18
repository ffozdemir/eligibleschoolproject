"use client";
import React, { useActionState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import { PasswordInput, SubmitButton, TextInput } from "../common/form-fields";
import "./login-form.scss";
import { loginAction } from "@/actions/auth-action";
import { initialState } from "@/helpers/form-validation";

const LoginForm = () => {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <Container className="login-form">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Body>
              <h4>Please enter your username and password</h4>
              {!state.ok && state.message && (
                <Alert variant="danger">{state.message}</Alert>
              )}
              <Form action={formAction}>
                <TextInput
                  label="Username"
                  name="username"
                  error={state?.errors?.username}
                  defaultValue={state.data.username ?? "root"}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  error={state?.errors?.password}
                  defaultValue={state.data.password ?? "12345aA."}
                />
                <SubmitButton title="Login" icon="sign-in" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
