import Welcome from "@/components/about/Welcome";
import Spacer from "@/components/common/Spacer";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import MobileApp from "@/components/home/MobileApp";
import Slider from "@/components/home/Slider";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Spacer />
      <Welcome />
      <Spacer />
      <FeaturedCourses />
      <Spacer />
      <UpcomingEvents />
      <Spacer />
      <MobileApp />
    </>
  );
}
