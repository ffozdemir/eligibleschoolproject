import ButtonLogOut from "@/components/common/header/ButtonLogOut";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
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
          <h2>Unauthorized Access Prohibited</h2>
          <p>
            You do not have permission to access this page. Please contact the
            administrator if you believe this is an error. If you are not
            authorized, please return to the home page or login.
          </p>
          <ButtonLogOut />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
