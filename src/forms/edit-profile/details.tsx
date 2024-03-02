import { CustomButton } from "@/components/ui";
import { getImage } from "@/utils";
import { ChangeEvent, Fragment, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type User = {
  avatar: any;
  name: string;
  lastName: string;
};
interface Inputs {
  name: string;
  lastName: string;
  avatar: FileList | string | null;
  dob?: any;
}

const EditProfileDetailsForm = ({ defaultValues }: { defaultValues: User }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<Inputs>({ defaultValues: defaultValues });

  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | File | null>(getImage(defaultValues.avatar) ?? null);

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    // if (image!==null&&typeof image !== "string") {
    //   const { data: storageData, error: storageError } = await supabase.storage
    //     .from("avatars")
    //     .upload(`avatars/${image.name}`, image, { upsert: true });
    //   if (storageError) {
    //     return toast.error("Couldn't upload image");
    //   }
    //   values.avatar = storageData?.path;
    // }
    // const { data: updatedData, error: updateError } = await supabase.auth.updateUser({ data: values });
    // if (!updateError) {
    //   const updatedUser = parseUser(updatedData.user as UserInterface);
    //   setUser(updatedUser);
    //   toast.success("Profile updated successfully");
    //   window.location.reload();
    // }
  };

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    console.log("changed");

    const files = e.target.files;
    if (files) {
      setImage(files[0]);
      setValue("avatar", files);
    }
  }

  function removeAvatar() {
    console.log("canceled");
    setImage(null);
    setValue("avatar", null);
  }

  function openFileSelector() {
    fileRef.current?.click();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container md:w-1/3 mx-auto my-10 grid gap-4">
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="avatar">
          Avatar :
        </label>
        <input id="avatar" type="file" className="hidden" {...register("avatar")} ref={fileRef} onChange={handleChangeFile} />

        {image ? (
          <Fragment>
            <img
              className="rounded-full h-40 w-40 object-cover mx-auto mb-3"
              src={typeof image === "string" ? image : URL.createObjectURL(image)}
              alt="avatar"
            />

            <div className="flex  flex-row items-center justify-center gap-2">
              <CustomButton onClick={openFileSelector} variant="secondary" className="bg-opacity-80">
                Change Image
              </CustomButton>
              <CustomButton onClick={removeAvatar} variant="danger" className="bg-opacity-80">
                Remove Image
              </CustomButton>
            </div>
          </Fragment>
        ) : (
          <div
            onClick={openFileSelector}
            className="w-40 h-40 border-dashed border-2 rounded-full mx-auto flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group"
          >
            <span className="opacity-50  group-hover:opacity-100">Upload avatar</span>
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
        <label className="pl-0.5 font-semibold" htmlFor="dob">
          Date of birth:
        </label>
        <br />
        <input
          id="dob"
          placeholder="17.02.2000"
          type="text"
          className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
          {...register("dob", { required: true })}
        />
      </div>

      <CustomButton disabled={!isValid} type="submit" variant="primary">
        Submit
      </CustomButton>
    </form>
  );
};

export default EditProfileDetailsForm;
