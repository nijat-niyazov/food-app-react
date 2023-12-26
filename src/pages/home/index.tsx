import { MotionDiv } from "@//components";
import { DiscountMenu, MealCategories } from "@//sections/home";

const HomePage = () => {
  return (
    <MotionDiv
      // initial={{ x: "100%" }}
      // animate={{ x: 0, transitionDelay: "250ms" }}
      className="container mb-10"
    >
      <DiscountMenu />
      <MealCategories />
    </MotionDiv>
  );
};

export default HomePage;
