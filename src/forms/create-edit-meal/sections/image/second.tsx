import { CustomButton } from "@/components/ui";
import { ChangeEvent, Fragment, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import PreviewImage from "./previewImage";

type MealImageProps = { defaultImage: string; control: any };

const MealImageSecond = ({ defaultImage, control }: MealImageProps) => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage);

  function handleChange(e: ChangeEvent<HTMLInputElement>, onChange: (img: File) => void) {
    const imageList = e.target.files as FileList;
    if (imageList) {
      setPreviewImage(URL.createObjectURL(imageList[0]));
      onChange(imageList[0]);
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);
  function openFileSelector() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <Controller
      control={control}
      name="img"
      rules={{ required: true }}
      render={({ field: { value, onChange, ref, ...field } }) => {
        return (
          <Fragment>
            <label className="pl-0.5 font-semibold">Image :</label>

            <input
              {...field}
              value={value?.fileName}
              onChange={(e) => handleChange(e, onChange)}
              type="file"
              className="hidden"
              id="img"
              ref={inputRef}
            />

            <PreviewImage previewImage={previewImage} defaultImage={defaultImage}>
              {previewImage && (
                <CustomButton className="mt-3" onClick={openFileSelector} variant="primary">
                  Change Image
                </CustomButton>
              )}
            </PreviewImage>
          </Fragment>
        );
      }}
    />
  );
};

export default MealImageSecond;
