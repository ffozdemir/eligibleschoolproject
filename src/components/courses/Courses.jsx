import React from "react";
import courses from "@/helpers/data/courses.json";
import { Col, Container, Row } from "react-bootstrap";

const Courses = ({ featured }) => {
  let filteredCourses = featured
    ? courses.filter((course) => course.featured)
    : courses;

  return (
    <Container>
      <Row>
        {filteredCourses.map((item) => (
          <Col key={item.id}>Card</Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
