import { MotionDiv } from "@/components";
import { FAQ, HomeSlider, Order, PopularCategories } from "@/sections/home";

const HomePage = () => {
  return (
    <MotionDiv
      // initial={{ x: "100%" }}
      // animate={{ x: 0, transitionDelay: "250ms" }}
      className="container mb-20 grid gap-10"
    >
      {/* <EmblaCarousel
        slides={Array.from(Array(10).keys())}
        options={{
          axis: "x",
        }}
      /> */}
      <HomeSlider />
      {/* <DiscountMenu /> */}
      <PopularCategories />
      {/* <Hire /> */}
      <Order />

      <FAQ />
      {/* <Counts /> */}
    </MotionDiv>
  );
};

export default HomePage;
