import { StepType } from "@/constants/types/spcieal-meal";
import CheckType from "./Checkbox";
import RadioType from "./Radio";

const Condiments = ({ condiments }: { condiments: StepType[] }) => {
  return (
    <div className="grid gap-14 mt-10">
      {condiments.map((condiment, i) => (
        <ul
          key={i}
          className="grid grid-cols-3 relative  border-1 border-black/30 px-6 py-[70px] rounded-xl"
        >
          <li className="absolute top-0 left-20 -translate-y-1/2">
            <div className="bg-text text-white rounded-r-xl font-bold text-3xl relative py-4 px-14">
              <div className="py-5 px-2 -translate-x-1/2 absolute left-0   rounded-full bg-primary">
                {condiment.imgHeading && (
                  <img
                    src={condiment.imgHeading}
                    alt=""
                    className="w-18 h-8 object-cover"
                  />
                )}
              </div>
              <p className="text-center">{condiment.heading}</p>
            </div>
          </li>

          {condiment.options.map((option) =>
            condiment.type === "radio" ? (
              <RadioType key={option.id} option={option} />
            ) : (
              <CheckType key={option.id} option={option} />
            )
          )}
        </ul>
      ))}
    </div>
  );
};

export default Condiments;
