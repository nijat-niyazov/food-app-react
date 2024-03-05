import { StorageImage } from "@/components";
import { CustomButton } from "@/components/ui";
import { ChangeEvent, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type MealImageProps = { register: UseFormRegister<any>; setValue: UseFormSetValue<any>; defaultImage: string };

const MealImage = ({ register, setValue, defaultImage }: MealImageProps) => {
  const [image, setImage] = useState<string>(defaultImage);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newImage = e.target.files as HTMLInputElement["files"];
    if (newImage) {
      setImage(URL.createObjectURL(newImage[0]));
      setValue("img", newImage[0]);
    }
  }

  const showStorageImg = image === defaultImage;

  console.log(image, defaultImage, showStorageImg);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="pl-0.5 font-semibold">Image :</label>
      <input id="image" type="file" className="hidden" {...register("img", { required: true })} onChange={handleChange} ref={inputRef} />

      <div className="w-32 h-32 rounded-full mx-auto">
        {!image ? (
          <label
            htmlFor="image"
            className="w-32 h-32 border-dashed border-2 rounded-full flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group mx-auto"
          >
            <span className="opacity-50 text-center group-hover:opacity-100 text-sm">Select meal image</span>
          </label>
        ) : showStorageImg ? (
          <StorageImage path="menu" src={image} alt="meal_img" className="object-cover rounded-full mx-auto w-32 h-32" />
        ) : (
          <img src={image} alt="meal_img" className="object-cover rounded-full mx-auto w-32 h-32" />
        )}
      </div>

      {image && (
        <footer className="flex items-center gap-3 mt-3">
          <CustomButton onClick={() => inputRef.current?.click()} variant="secondary">
            Change Image
          </CustomButton>

          <CustomButton onClick={() => setImage("")} variant="danger">
            Remove Image
          </CustomButton>
        </footer>
      )}
    </div>
  );
};

export default MealImage;
