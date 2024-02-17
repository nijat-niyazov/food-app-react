import { CustomButton } from "@/components";
import { SpecialMealModal } from "@/components/modal-contents";
import { openModal } from "@/stores/modal";

const SpecialMeal = () => {
  const handleFormOfMeal = (mealId: "pizza" | "burger") => openModal(<SpecialMealModal mealId={mealId} />, 70);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-4">
        {["pizza", "burger"].map((key, i) => (
          <CustomButton
            variant="secondary"
            key={i + 1}
            onClick={() => handleFormOfMeal(key.toLowerCase() as "pizza" | "burger")}
            className="w-auto"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </CustomButton>
        ))}
      </div>

      {/* <div className="mt-10">
        <h5
          className={cn("mb-5 text-2xl border-b-1 border-black/50", {
            "opacity-50": !customOrders.length,
          })}
        >
          Drafts :
        </h5>
        <div className="flex flex-wrap gap-4 ">
          {customOrders.map(({ meal, order }, i) => (
            <CustomButton
              variant="primary"
              key={i + 1}
              onClick={() => handleFormOfMeal(meal.toLowerCase() as "pizza" | "burger", order)}
              className="w-auto"
            >
              {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </CustomButton>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SpecialMeal;
