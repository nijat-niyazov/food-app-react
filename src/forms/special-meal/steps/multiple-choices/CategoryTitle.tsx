import { FC } from "react";

type Props = {
  img: string;
  title: string;
};

const CategoryTitle: FC<Props> = ({ img, title }) => {
  return (
    <header className="bg-text text-white rounded-r-xl font-bold text-lg absolute py-1 px-8 flex items-center left-24 -top-5">
      <div className="p-2 -translate-x-1/2 absolute left-0   rounded-full bg-primary">
        <img src={img} alt="" className="w-8 h-8 object-cover" />
      </div>

      <h3 className="text-center">{title} </h3>
    </header>
  );
};

export default CategoryTitle;
