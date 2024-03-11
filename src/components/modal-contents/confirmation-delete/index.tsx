import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { closeModal } from "@/stores/modal";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type ConfirmDeleteProps = {
  mealId: number;
};

const ConfirmDelete = ({ mealId }: ConfirmDeleteProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
    reset,
    setValue,
    control,
    getFieldState,
    trigger,
  } = useForm();

  const onSubmit = async () => {
    const { error } = await supabase.from("menu").delete().eq("id", mealId);

    if (error) {
      return toast.error("Something went wrong");
    } else {
      toast.success("Meal deleted successfully");
      window.location.reload();
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className=" p-4 grid gap-4">
        <h3 className="text-primary text-2xl font-bold text-center mb-10">Are you sure you want to delete this meal?</h3>

        <footer className="flex items-center justify-center gap-4">
          <CustomButton type="button" variant="secondary" font="bold" onClick={closeModal}>
            Cancel
          </CustomButton>

          <CustomButton type="submit" disabled={isSubmitting} variant="danger" font="bold">
            {!isSubmitting ? "Delete" : <MySpinner />}
          </CustomButton>
        </footer>
      </form>
    </div>
  );
};

export default ConfirmDelete;
