import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { memo } from "react";

type FormButtonProps = {
  currentStep: number;
  handleStep: (route?: "next") => void;
  lastStep: boolean;
  isValid?: boolean;
  disabled?: boolean;
  isSubmitting?: boolean;
};

const Buttons = ({ currentStep, handleStep, lastStep, isSubmitting, isValid, disabled }: FormButtonProps) => {
  function onClick(e: React.MouseEvent<HTMLButtonElement>, direction?: "next") {
    e.preventDefault();
    handleStep(direction);
  }

  return (
    <div className="flex gap-2 items-center">
      <CustomButton
        disabled={currentStep === 0 || isSubmitting}
        onClick={onClick}
        type="button"
        variant="primary"
        className="w-auto"
        size="md"
      >
        Go back
      </CustomButton>

      <CustomButton
        variant="secondary"
        size="md"
        className="w-auto"
        onClick={(e) => (!lastStep ? onClick(e, "next") : null)}
        type={lastStep ? "submit" : "button"}
        disabled={isSubmitting}
      >
        {!lastStep ? "Next" : isSubmitting ? <MySpinner /> : "Finish"}
      </CustomButton>
    </div>
  );
};

export default memo(Buttons);
