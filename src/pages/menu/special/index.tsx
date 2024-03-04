import { SpecialMealModal } from "@/components/modal-contents";
import { CustomButton } from "@/components/ui";
import { openModal } from "@/stores/modal";

import CModal from "@/components/ui/modal/c-modal";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import "./background.css";

const SpecialMeal = () => {
  const handleFormOfMeal = (mealId: "pizza" | "burger") => openModal(<SpecialMealModal mealId={mealId} />, 70);

  const [isOpened, setIsOpened] = useState(false);
  const [mealId, setMealId] = useState<string>("");

  const handleClose = () => {
    setIsOpened(false);
    setMealId("");
  };

  const handleClick = (id: string) => {
    setIsOpened(true);
    setMealId(id);
  };

  return (
    <Fragment>
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-4">
          {["pizza", "burger"].map((key, i) => (
            <CustomButton
              variant="secondary"
              key={i + 1}
              // onClick={() => handleFormOfMeal(key.toLowerCase() as "pizza" | "burger")}
              onClick={() => handleClick(key)}
              className="w-auto"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </CustomButton>
          ))}
        </div>
      </div>

      <CModal isOpened={isOpened} handleClose={handleClose} className={"pizza"}>
        <SpecialMealModal mealId={"pizza"} />
      </CModal>
    </Fragment>
  );
};

export default SpecialMeal;
