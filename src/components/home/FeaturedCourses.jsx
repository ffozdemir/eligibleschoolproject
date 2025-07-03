import React from "react";
import Courses from "../courses/Courses";

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <Courses featured={true} />
    </div>
  );
};

export default FeaturedCourses;
