import { order_food } from "@/assets/images";
import { Swapper } from "@/components/ui";
import { Answer } from "@/services/api";
import { EmblaOptionsType } from "embla-carousel";

type Props = { answers: Answer["answer"] };

const options: EmblaOptionsType = { axis: "y", align: "center", loop: true };

const CardsOfFaq = ({ answers }: Props) => {
  return (
    <Swapper options={options}>
      <ul className="flex flex-col items-start max-h-[420px] md:max-h-80 ">
        {answers.map(({ title, content }, i) => {
          return (
            <li key={i} className="grid place-items-center rounded-xl bg-faq p-6 my-5">
              <h3 className="font-bold text-lg">{title}</h3>
              <img src={order_food} alt="" className="w-32 h-32 object-cover" />
              <span className="text-base font-medium text-justify">{content}</span>
            </li>
          );
        })}
      </ul>
    </Swapper>
  );
};

export default CardsOfFaq;
