import { StorageImage } from "@/components";
import { Fragment, ReactNode } from "react";

type PreviewImageProps = { previewImage: string; defaultImage: string; children?: ReactNode };

const PreviewImage = ({ previewImage, defaultImage, children }: PreviewImageProps) => {
  return (
    <Fragment>
      <div className="w-32 h-32 rounded-full mx-auto">
        {!previewImage ? (
          <label
            htmlFor="img"
            className="w-32 h-32 border-dashed border-2 rounded-full flex items-center justify-center border-black/20 hover:border-black/50 cursor-pointer group mx-auto"
          >
            <span className="opacity-50 text-center group-hover:opacity-100 text-sm">Select meal image</span>
          </label>
        ) : previewImage === defaultImage ? (
          <StorageImage path="menu" src={previewImage} alt="meal_img" className="object-cover rounded-full mx-auto w-32 h-32" />
        ) : (
          <img src={previewImage} alt="meal_img" className="object-cover rounded-full mx-auto w-32 h-32" />
        )}
      </div>

      {children}
    </Fragment>
  );
};

export default PreviewImage;
