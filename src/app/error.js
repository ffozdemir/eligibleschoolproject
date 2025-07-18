"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
          <h2>Something went wrong!</h2>
          <p>
            An unexpected error has occurred. Please try again later or contact
            support if the issue persists.
          </p>
          <Button
            variant="outline-primary"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
