import React from "react";
import Courses from "../courses/Courses";
import SectionHeader from "../common/SectionHeader";

const FeaturedCourses = () => {
  return (
    <div className="content-section bg">
      <SectionHeader title="Featured Courses" />
      <Courses featured={true} />
    </div>
  );
};

export default FeaturedCourses;
