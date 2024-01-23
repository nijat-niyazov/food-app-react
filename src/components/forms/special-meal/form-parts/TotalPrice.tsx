import { useForm } from "react-hook-form";
import { Inputs } from "..";

const TotalPrice = ({ totalPrice }: { totalPrice: number | undefined }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      isLoading,
      dirtyFields,
      isValidating,
      disabled,
      isSubmitted,
      submitCount,
      touchedFields,
      defaultValues,
    },
    getValues,
    setValue,
    control,
    clearErrors,
    getFieldState,
    reset,
    resetField,
    trigger,
    unregister,
    setError,
    setFocus,
  } = useForm<Inputs>();

  // const totalToPay = watch("size");

  // console.log(
  //   "pricePage",
  //   totalToPay,
  //   options["pizza"][0].choices?.map((choice) => choice.price)
  // );

  return (
    <div className="bg-primary text-white rounded-lg font-semibold p-4 flex gap-4 items-center w-1/3 mt-4">
      <span className="text-xl">Total to pay</span>
      <span className="text-4xl">${totalPrice ?? 0}</span>
    </div>
  );
};

export default TotalPrice;
