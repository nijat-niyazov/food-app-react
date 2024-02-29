import { CustomButton } from "@/components";
import { supabase } from "@/constants/supabase";
import { getImage } from "@/utils";
import { Fragment, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type User = {
  email: string;
  avatar: any;
  name: string;
  lastName: string;
};
interface Inputs {
  name: string;
  lastName: string;
  avatar?: any;
  email: string;
  password: string;
  dob?: any;
}

const EditProfileForm = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<Inputs>({ defaultValues: user });

  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const { data: storageData, error: storageError } = await supabase.storage
      .from("avatars")
      .upload(`avatars/${image?.name}`, image as File, { upsert: true });

    if (storageError) {
      return toast.error("Couldn't upload image");
    }

    const { email, password, ...rest } = values;
    const newData = { ...rest, avatar: storageData?.path };

    // console.log(newData);

    const { data: updatedData, error: updateError } = await supabase.auth.updateUser({
      email,
      password,
      data: { ...newData },
    });

    if (!updateError) {
      toast.success("Profile updated successfully");
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container md:w-1/3 mx-auto my-10">
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="image">
          Image :
        </label>
        <input
          id="image"
          type="file"
          className="hidden"
          {...register("avatar", { required: true })}
          ref={fileRef}
          onChange={(e) => {
            const image = e.target.files as HTMLInputElement["files"];
            if (image) {
              setImage(image[0]);
              setValue("avatar", image);
            }
          }}
        />

        {image || user.avatar ? (
          <Fragment>
            <div className="relative group cursor-pointer transition-all duration-200">
              <img
                className="md:group-hover:opacity-50 "
                src={image !== null ? (typeof image === "string" ? image : URL.createObjectURL(image)) : getImage(user.avatar)}
                alt="avatar"
              />
              <span
                onClick={() => fileRef.current?.click()}
                className="hidden absolute inset-0 w-full h-full md:flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
              >
                Change Image
              </span>
            </div>
            <CustomButton onClick={() => fileRef.current?.click()} variant="outlined" className="border-1 border-black/30 md:hidden">
              Change Image
            </CustomButton>
          </Fragment>
        ) : (
          <div
            onClick={() => fileRef.current?.click()}
            className="w-full h-40 border-dashed border-2 rounded-md flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group"
          >
            <span className="opacity-50  group-hover:opacity-100">Upload new Image</span>
          </div>
        )}
      </div>

      <div>
        <label className="pl-0.5 font-semibold" htmlFor="name">
          Name :
        </label>
        <br />
        <input
          id="name"
          placeholder="Nijat"
          type="text"
          className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="lastname">
          Lastname :
        </label>
        <br />
        <input
          id="lastname"
          placeholder="Niyazov"
          type="text"
          className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
          {...register("lastName", { required: true })}
        />
      </div>
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="email">
          Email :
        </label>
        <br />
        <input
          id="email"
          placeholder="Nijat"
          type="text"
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
          placeholder="Niyazov"
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

export default EditProfileForm;
