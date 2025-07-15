import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="my-4">
      <Row
        className="align-items-center text-center text-md-start"
        xs={1}
        md={2}
      >
        <Col>
          <Image
            src="/img/errors/error.png"
            alt="Not Found"
            width={500}
            height={500}
            className="img-fluid"
          />
        </Col>
        <Col>
          <h2>Page not found</h2>
          <p>
            The page you are looking for does not exist or has been moved.
            Please check the URL or return to the homepage.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
