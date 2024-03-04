import { CustomButton } from "@/components/ui";
import { ChangeEvent, FC, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type MealImageProps = {
  defImg: any;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
};

const MealImage: FC<MealImageProps> = ({ defImg, register, setValue }) => {
  const [image, setImage] = useState<any>(defImg);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const image = e.target.files as HTMLInputElement["files"];
    if (image) {
      setImage(image[0]);
      setValue("file", URL.createObjectURL(image[0]));
    }
  }

  return (
    <div>
      <label className="pl-0.5 font-semibold">Image :</label>
      <input id="image" type="file" className="hidden" {...register("file", { required: true })} onChange={handleChange} />
      {!image ? (
        <label
          htmlFor="image"
          className="w-32 h-32 border-dashed border-2 rounded-full flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group mx-auto"
        >
          <span className="opacity-50  group-hover:opacity-100 text-sm">Select meal image</span>
        </label>
      ) : (
        <>
          <div className="relative group cursor-pointer transition-all duration-200">
            <img className="md:group-hover:opacity-50 " src={typeof image === "string" ? image : URL.createObjectURL(image)} alt="avatar" />
            <label
              htmlFor="image"
              className="hidden absolute inset-0 w-full h-full md:flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
            >
              Change Image
            </label>
          </div>
          <CustomButton variant="transparent" className="border-1 border-black/30 md:hidden">
            <label className="w-full" htmlFor="image">
              Change Image
            </label>
          </CustomButton>
        </>
      )}
    </div>
  );
};

export default MealImage;
