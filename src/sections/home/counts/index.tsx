import { cn } from "@/utils";
import CountUp from "react-countup";

type Props = {};

const items = [
  { start: 0, end: 500, title: "Registered Riders" },
  { start: 400, end: 700, title: "Registered Riders" },
  { start: 800, end: 1500, title: "Registered Riders" },
  { start: 300, end: 600, title: "Registered Riders" },
];

const Counts = (props: Props) => {
  return (
    <ul className="rounded-xl flex flex-col md:flex-row items-center  text-white bg-primary px-10 md:py-7 py-10">
      {items.map(({ start, end, title }, i) => (
        <li
          key={i}
          className={cn("border-b-1 md:border-b-0 md:border-r-1  grow text-center border-faq grid", {
            "border-none": i === items.length - 1,
          })}
        >
          <CountUp start={start} end={end} duration={1.5} enableScrollSpy={true} scrollSpyOnce>
            {({ countUpRef }) => {
              return (
                <>
                  <p className="flex-centered text-[64px] font-light">
                    <span ref={countUpRef} /> <span>+</span>
                  </p>
                  <p className="text-2xl font-bold">{title}</p>
                </>
              );
            }}
          </CountUp>
        </li>
      ))}
    </ul>
  );
};

export default Counts;
