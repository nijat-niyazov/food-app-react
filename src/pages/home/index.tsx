import { MotionDiv } from "@/components";
import { Counts, HomeSlider, MealCategories, Order } from "@/sections/home";

const HomePage = () => {
  return (
    <MotionDiv // initial={{ x: "100%" }}      // animate={{ x: 0, transitionDelay: "250ms" }}
      className="container mb-20 grid gap-10"
    >
      <HomeSlider />
      {/* <DiscountMenu /> */}
      <MealCategories />
      {/* <Hire /> */}
      <Order />
      {/* <FAQ /> */}
      <Counts />
    </MotionDiv>
  );
};

export default HomePage;
