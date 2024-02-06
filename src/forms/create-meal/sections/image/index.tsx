import { CustomButton } from "@/components";
import { ChangeEvent, FC, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type MealImageProps = {
  defImg: any;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
};

const MealImage: FC<MealImageProps> = ({ defImg, register, setValue }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>(defImg);

  return (
    <div>
      <label className="pl-0.5 font-semibold" htmlFor="image">
        Image :
      </label>
      <input
        id="image"
        type="file"
        className="hidden"
        {...register("file", { required: true })}
        ref={fileRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const image = e.target.files as HTMLInputElement["files"];
          if (image) {
            setImage(image[0]);
            setValue("file", URL.createObjectURL(image[0]));
          }
        }}
      />
      {!image ? (
        <div
          onClick={() => fileRef.current?.click()}
          className="w-full h-40 border-dashed border-2 rounded-md flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group"
        >
          <span className="opacity-50  group-hover:opacity-100">Select meal image</span>
        </div>
      ) : (
        <>
          <div className="relative group cursor-pointer transition-all duration-200">
            <img className="md:group-hover:opacity-50 " src={typeof image === "string" ? image : URL.createObjectURL(image)} alt="avatar" />
            <span
              onClick={() => fileRef.current?.click()}
              className="hidden absolute inset-0 w-full h-full md:flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
            >
              Change Image
            </span>
          </div>
          <CustomButton onClick={() => fileRef.current?.click()} variant="transparent" className="border-1 border-black/30 md:hidden">
            Change Image
          </CustomButton>
        </>
      )}
    </div>
  );
};

export default MealImage;
