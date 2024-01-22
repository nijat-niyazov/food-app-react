import { CustomButton } from "@/components";
import { Dispatch, SetStateAction } from "react";

type FormButtonProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  lastStep: boolean;
  isValid: boolean;
};

const Buttons = ({
  currentStep,
  setCurrentStep,
  lastStep,
  isValid,
}: FormButtonProps) => {
  return (
    <div className="flex gap-2 items-center justify-end">
      <CustomButton
        disabled={currentStep === 0}
        onClick={() => setCurrentStep((p) => p - 1)}
        type="button"
        variant="primary"
      >
        Go back
      </CustomButton>

      <CustomButton
        variant="success"
        disabled={!isValid}
        className="disabled:opacity-50"
        onClick={() => setCurrentStep((p) => p + 1)}
        type={lastStep ? "submit" : "button"}
      >
        {lastStep ? "Finish " : "Next"}
      </CustomButton>
    </div>
  );
};

export default Buttons;
