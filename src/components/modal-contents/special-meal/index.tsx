import { meals } from "@/constants/data/special-meal";
import { useState } from "react";

const PreperaringSpecialMeal = ({ mealId }: { mealId: number }) => {
  let key: keyof typeof meals;

  switch (mealId) {
    case 1:
      key = "pizza";
      break;
    case 2:
      key = "burger";
      break;

    default:
      key = "burger";
  }

  const selectedMeal = meals[key];
  const maxSteps = selectedMeal.length + 1; // additional one for note

  // const [myOrder, setMyOrder] = useState<{
  //   size?: string;
  //   ingredients?: string[];
  // } | null>(null);

  const [note, setNote] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(0);

  let section: JSX.Element | null = null;

  // switch (currentStep) {
  //   case 0:
  //     section = <Sizes sizes={selectedMeal[currentStep].sizes} />;
  //     break;
  //   case 1:
  //     section = (
  //       <Ingredients ingredients={selectedMeal[currentStep].ingredients} />
  //     );
  //     break;
  //   case 2:
  //     section = (
  //       <Condiments condiments={selectedMeal[currentStep].condiments} />
  //     );
  //     break;

  //   default:
  //     section = null;
  // }

  return null;
  // (
  //   <form className="scale-75">
  //     <h3 className="font-bold text-2xl text-end ">
  //       {currentStep + 1} / {maxSteps} Step
  //     </h3>

  //     <h5 className="font-bold text-4xl text-start mb-4">
  //       {currentStep < maxSteps - 1 // removing one for note
  //         ? selectedMeal[currentStep].category
  //         : "Special Note"}
  //     </h5>

  //     {section}

  //     {currentStep === maxSteps - 1 && (
  //       <textarea
  //         placeholder="Write your special instructions here..."
  //         cols={50}
  //         value={note}
  //         className="border-1 w-full border-black/30 rounded-md p-4"
  //         onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
  //           setNote(e.target.value)
  //         }
  //       />
  //     )}

  //     <div className="bg-primary text-white rounded-lg font-semibold p-4 flex gap-4 items-center w-1/4 mt-4">
  //       <span className="text-xl">Total to pay</span>
  //       <span className="text-4xl">$127.9</span>
  //     </div>

  //     <div className="flex items-center justify-end gap-4 ">
  //       <CustomButton
  //         // disabled={currentStep === 0}
  //         variant="primary"
  //         className="disabled:opacity-0 disabled:pointer-events-none"
  //         onClick={() => setCurrentStep((p) => p - 1)}
  //       >
  //         Go Back
  //       </CustomButton>

  //       <CustomButton
  //         variant="success"
  //         // disabled={true}
  //         // type={currentStep+1 === maxSteps ? "submit" : "button"}
  //         onClick={() =>
  //           currentStep < maxSteps - 1
  //             ? setCurrentStep((p) => p + 1)
  //             : closeModal()
  //         }
  //       >
  //         {currentStep < maxSteps - 1 ? "Next" : "Finish"}
  //       </CustomButton>
  //     </div>
  //   </form>
  // );
};

export default PreperaringSpecialMeal;
