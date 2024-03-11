import { ChangeEvent, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import PreviewImage from "./previewImage";

type MealImageProps = {
  register: UseFormRegister<{ img: File }>;
  setValue: UseFormSetValue<{ img: File | null }>;
  defaultImage: string;
};

const MealImage = ({ register, setValue, defaultImage }: MealImageProps) => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newImage = e.target.files as FileList;
    if (newImage) {
      const imageFile = newImage[0];
      setPreviewImage(URL.createObjectURL(imageFile));
      setValue("img", imageFile);
    }
  }

  function handleRemove() {
    setPreviewImage("");
    setValue("img", null);
  }

  return (
    <div>
      <label className="pl-0.5 font-semibold">Image :</label>
      <input id="img" type="file" className="hidden" {...register("img", { required: true })} onChange={handleChange} />

      <PreviewImage defaultImage={defaultImage} previewImage={previewImage}></PreviewImage>
    </div>
  );
};

export default MealImage;
