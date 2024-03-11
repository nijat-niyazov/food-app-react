import { FC } from "react";

type Props = {
  img: string;
  title: string;
};

const CategoryTitle: FC<Props> = ({ img, title }) => {
  return (
    <header className="bg-darkblue text-white rounded-r-xl font-bold text-lg absolute py-2 px-10 flex items-center left-24 -top-6">
      <div className="p-3 -translate-x-1/2 absolute left-0   rounded-full bg-oranged">
        <img src={img} alt="" className="w-8 h-8 object-cover" />
      </div>

      <h3 className="text-center">{title} </h3>
    </header>
  );
};

export default CategoryTitle;
