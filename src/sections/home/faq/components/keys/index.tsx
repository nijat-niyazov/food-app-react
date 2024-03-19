import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";
import { motion } from "framer-motion";

type Props = {
  keys: string[];
  activeKey: number;
  handleKey: (i: number) => void;
};

const TabKeys = ({ keys, activeKey, handleKey }: Props) => {
  return (
    <ul className="flex flex-col gap-2 ">
      {keys.map((key, i) => (
        <motion.li
          key={i}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.1 } }}
          viewport={{ once: true }}
        >
          <CustomButton
            variant={activeKey === i ? "primary" : "transparent"}
            onClick={() => handleKey(i)}
            borderRadius="full"
            className={cn("w-full text-white font-bold py-4", {
              "text-text": activeKey === i,
              "hover:bg-primary/50 ": activeKey !== i,
            })}
          >
            {key}
          </CustomButton>
        </motion.li>
      ))}
    </ul>
  );
};

export default TabKeys;
