import { CustomOrderType } from "@/stores/custom-order";
import BasketCustomOrder from "../menu/basket-custom-order";

type Props = {
  items: CustomOrderType[];
};

const CustomItems = ({ items }: Props) => {
  return (
    <div>
      {items.length > 0 && (
        <>
          <h4 className="mb-2 text-lg pl-2 border-t-2 border-black pt-1">Custom orders :</h4>
          <div className="grid gap-3 ">
            {items?.map((item, i) => (
              <BasketCustomOrder key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomItems;
