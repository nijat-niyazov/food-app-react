import { CustomButton } from "@/components";
import { memo } from "react";

type FormButtonProps = {
  currentStep: number;
  handleStep: (route?: "next") => void;
  lastStep: boolean;
  isValid: boolean;
  disabled?: any;
};

const Buttons = ({ currentStep, handleStep, lastStep, isValid, disabled }: FormButtonProps) => {
  return (
    <div className="flex gap-2 items-center">
      <CustomButton disabled={currentStep === 0} onClick={() => handleStep()} type="button" variant="primary" className="w-auto" size="md">
        Go back
      </CustomButton>

      {!lastStep ? (
        <CustomButton variant="secondary" size="md" disabled={!isValid || !disabled} className="w-auto" onClick={() => handleStep("next")}>
          Next
        </CustomButton>
      ) : (
        <CustomButton variant="secondary" size="md" disabled={!isValid || !disabled} className="w-auto" type="submit">
          Finish
        </CustomButton>
      )}
    </div>
  );
};

export default memo(Buttons);
