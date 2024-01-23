import { CustomButton } from "@/components";

type FormButtonProps = {
  currentStep: number;
  handleStep: (route?: "forward") => void;
  lastStep: boolean;
  isValid: boolean;
  disabled?: any;
};

const Buttons = ({
  currentStep,
  handleStep,
  lastStep,
  isValid,
  disabled,
}: FormButtonProps) => {
  return (
    <div className="flex gap-2 items-center justify-end">
      <CustomButton
        disabled={currentStep === 0}
        onClick={() => handleStep()}
        type="button"
        variant="primary"
      >
        Go back
      </CustomButton>

      <CustomButton
        variant="success"
        disabled={!isValid || !disabled}
        className="disabled:opacity-50"
        onClick={() => handleStep("forward")}
        type={lastStep ? "submit" : "button"}
      >
        {lastStep ? "Finish " : "Next"}
      </CustomButton>
    </div>
  );
};

export default Buttons;
