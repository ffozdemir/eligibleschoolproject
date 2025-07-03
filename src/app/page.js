import Welcome from "@/components/about/Welcome";
import Spacer from "@/components/common/Spacer";
import Slider from "@/components/home/Slider";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Spacer />
      <Welcome />
      <Spacer />
    </>
  );
}
