import { CustomButton } from "@/components";

type FormButtonProps = {
  currentStep: number;
  handleStep: (route?: "next") => void;
  lastStep: boolean;
  isValid: boolean;
  disabled?: any;
};

const Buttons = ({ currentStep, handleStep, lastStep, isValid, disabled }: FormButtonProps) => {
  return (
    <div className="flex gap-2 items-center justify-end">
      <CustomButton disabled={currentStep === 0} onClick={() => handleStep()} type="button" variant="primary" className="w-auto" size="xl">
        Go back
      </CustomButton>

      <CustomButton
        variant="secondary"
        size="xl"
        disabled={!isValid || !disabled}
        className="disabled:opacity-50 w-auto"
        onClick={() => handleStep("next")}
        type={lastStep ? "submit" : "button"}
      >
        {lastStep ? "Finish " : "Next"}
      </CustomButton>
    </div>
  );
};

export default Buttons;
