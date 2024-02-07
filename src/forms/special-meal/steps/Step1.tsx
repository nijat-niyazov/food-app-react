import { StepType } from "@/constants/types/spcieal-meal";
import { Radio } from "@/forms/elements";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type Step1Props = {
  options: StepType["options"];
  register: UseFormRegister<any>;
};
const Step1: FC<Step1Props> = ({ options, register }) => {
  return (
    <ul className="grid gap-3 text-2xl font-semibold">
      {options.map((option, i) => (
        <Radio register={register} key={i} fieldName="size" required option={option} i={i} />
      ))}
    </ul>
  );
};

export default Step1;
