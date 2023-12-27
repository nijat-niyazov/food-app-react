import { MotionDiv } from "@//components";
import { DiscountMenu, FAQ, Hire, MealCategories } from "@//sections/home";

const HomePage = () => {
  return (
    <MotionDiv
      // initial={{ x: "100%" }}
      // animate={{ x: 0, transitionDelay: "250ms" }}
      className="container mb-20 grid gap-10"
    >
      <DiscountMenu />
      <MealCategories />
      <Hire />
      <FAQ />
    </MotionDiv>
  );
};

export default HomePage;
