import { BasketItemType } from "@/constants/types/meal";
import BasketMenuItem from "../item/basket-menu-item";

type BasketMenuItemProps = {
  items: BasketItemType[];
};

const MenuItems = ({ items }: BasketMenuItemProps) => {
  return (
    <div>
      {items.length > 0 && (
        <>
          <h4 className="mb-2 text-lg pl-2">Menu orders :</h4>
          <div className="grid gap-3 ">
            {items.map((item, i) => (
              <BasketMenuItem key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MenuItems;
