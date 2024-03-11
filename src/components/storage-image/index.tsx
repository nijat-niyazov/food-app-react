import { getImage } from "@/utils";
import React from "react";

type ImageProps = { path: string; src: string; alt: string; defaultImage?: string } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StorageImage = ({ path, src, alt, defaultImage, ...props }: ImageProps) => {
  return <img src={getImage(path, src) ?? defaultImage} alt={alt} className="w-11 h-11 object-cover rounded-full" {...props} />;
};

export default StorageImage;
