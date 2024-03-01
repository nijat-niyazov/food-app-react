import { getImage } from "@/utils";
import React from "react";

type ImageProps = { src: string; alt: string; defaultImage?: string } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StorageImage = ({ src, alt, defaultImage, ...props }: ImageProps) => {
  return <img src={getImage(src) ?? defaultImage} alt={alt} className="w-11 h-11 object-cover rounded-full" />;
};

export default StorageImage;
