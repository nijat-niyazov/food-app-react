const StepInfo = ({ currentStep, maxSteps }: { currentStep: number; maxSteps: number }) => {
  return (
    <h3 className="font-bold text-xl text-end ">
      {currentStep + 1} / {maxSteps} Step
    </h3>
  );
};

export default StepInfo;
