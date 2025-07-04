import React from "react";
import events from "@/helpers/data/events.json";
import { Container } from "react-bootstrap";
import SectionHeader from "../common/SectionHeader";
import UpcomingEventsCarousel from "./UpcomingEventsCarousel";

const UpcomingEvents = () => {
  const upcomingEvents = events.filter(
    (event) => new Date(`${event.date} ${event.time}`) > new Date()
  );

  return (
    <Container>
      <SectionHeader title="Upcoming Events" />
      <UpcomingEventsCarousel data={upcomingEvents} />
    </Container>
  );
};

export default UpcomingEvents;
