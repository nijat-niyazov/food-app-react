import { CustomButton } from "@/components";
import { SpecialMealForm } from "@/forms";
import { openModal } from "@/stores/modal";

const options = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Burger" },
];

const SpecialMeal = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map(({ name, id }) => (
        <CustomButton
          variant="secondary"
          key={id}
          // onClick={() => openModal(id === 2 ? <PreperaringSpecialMeal mealId={2} /> : <SpecialMealForm />, 80)}
          onClick={() => openModal(<SpecialMealForm />, 80)}
          className="w-auto"
        >
          {name}
        </CustomButton>
      ))}
    </div>
  );
};

export default SpecialMeal;
