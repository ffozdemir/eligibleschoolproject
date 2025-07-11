import React from "react";
import EventCard from "./EventCard";
import { Col, Container, Row } from "react-bootstrap";
import events from "@/helpers/data/events.json";



const Events = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {events.map((item) => (
          <Col key={item.id}>
            <EventCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
