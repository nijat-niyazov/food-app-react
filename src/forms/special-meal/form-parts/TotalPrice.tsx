import { FC } from "react";

type Props = { price: number };

const TotalPrice: FC<Props> = ({ price }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: {
  //     errors,
  //     isDirty,
  //     isValid,
  //     isSubmitting,
  //     isSubmitSuccessful,
  //     isLoading,
  //     dirtyFields,
  //     isValidating,
  //     disabled,
  //     isSubmitted,
  //     submitCount,
  //     touchedFields,
  //     defaultValues,
  //   },
  //   getValues,
  //   setValue,
  //   control,
  //   clearErrors,
  //   getFieldState,
  //   reset,
  //   resetField,
  //   trigger,
  //   unregister,
  //   setError,
  //   setFocus,
  // } = useForm();

  // const totalToPay = watch("size");

  // console.log(
  //   "pricePage",
  //   totalToPay,
  //   options["pizza"][0].choices?.map((choice) => choice.price)
  // );

  return (
    <p className="bg-primary text-white rounded-lg font-medium px-5 py-2 mt-4 flex items-center gap-3">
      Total to pay :<span className="text-xl font-semibold ml-auto">${price || 0}</span>
    </p>
  );
};

export default TotalPrice;
