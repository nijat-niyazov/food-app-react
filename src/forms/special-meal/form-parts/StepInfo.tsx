type Props = {
  currentStep: number;
  maxSteps: number;
  name: string;
};

const StepInfo = ({ currentStep, maxSteps, name }: Props) => {
  return (
    <header>
      <h3 className="font-bold text-xl text-end ">
        {currentStep + 1} / {maxSteps} Step
      </h3>
      <h5 className="font-bold text-2xl text-start mb-4">{name}</h5>
    </header>
  );
};

export default StepInfo;
