import { order_food } from "@/assets/images";

type Props = {
  answers: { title: string; content: string; image: any }[];
};

const CardsOfFaq = ({ answers }: Props) => {
  return (
    <ul className="rounded-xl text-text grid gap-6 md:flex md:w-2/3 overflow-x-auto ">
      {answers.map(({ title, content, image }, i) => (
        <li key={i} className="flex flex-col items-center rounded-xl bg-faq p-6 md:w-1/3">
          <h3 className="font-bold text-lg">{title}</h3>
          <img src={image ?? order_food} alt="" className="w-32 h-32 object-cover" />
          <span className="text-base font-medium text-justify">{content}</span>
        </li>
      ))}
    </ul>
  );
};

export default CardsOfFaq;
