import { CustomButton } from "@/components/ui";
import { supabase } from "@/constants/supabase";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

const EditProfilePrivacyForm = ({ defaultValues }: { defaultValues: { email: string } }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<Inputs>({ defaultValues });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const { data: updatedData, error: updateError } = await supabase.auth.updateUser(values);

    if (!updateError) {
      toast.success("Profile updated successfully");
      // window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container md:w-1/3 mx-auto my-10 grid gap-4">
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="email">
          Email :
        </label>
        <br />
        <input
          id="email"
          placeholder="example.com"
          type="email"
          className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
          {...register("email", { required: true })}
        />
      </div>

      <div>
        <label className="pl-0.5 font-semibold" htmlFor="password">
          Password :
        </label>
        <br />
        <input
          id="password"
          placeholder="Your Secret"
          type="password"
          className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
          {...register("password", { required: true })}
        />
      </div>

      <CustomButton disabled={!isValid} type="submit" variant="primary">
        Submit
      </CustomButton>
    </form>
  );
};

export default EditProfilePrivacyForm;
