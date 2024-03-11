import { Remove } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter";
import { StorageImage } from "@/components";
import { ConfirmDelete } from "@/components/modal-contents";
import { CustomButton } from "@/components/ui";
import { MealType } from "@/constants/types/meal";
import { openModal } from "@/stores/modal";
import { useNavigate } from "react-router-dom";

const AdminMealCard = ({ meal }: { meal: MealType }) => {
  const navigate = useNavigate();

  return (
    <li className="flex flex-col justify-between   gap-2 p-2 px-4 border-1 border-black/20 rounded-md ">
      {/* ---------------------------------- Image --------------------------------- */}
      <StorageImage path="menu" src={meal.img} alt="img" className="object-cover rounded-full mx-auto w-28 h-28" />

      {/* --------------------------------- Title --------------------------------- */}
      <p className="font-semibold text-lg grid">
        <span className=" select-none text-greeny text-base font-semibold">Title:</span>
        <span className="font-medium text-base">{meal.title}</span>
      </p>

      {/* -------------------------------- Category -------------------------------- */}
      <p className="text-base font-medium  grid">
        <span className=" select-none text-greeny text-base font-semibold"> Category:</span>
        {meal.category_name}
      </p>
      {/* ------------------------------- Description ------------------------------ */}
      <p className="text-sm font-medium grid ">
        <span className=" select-none text-greeny text-base font-semibold"> Description:</span>
        {meal.description}
      </p>

      {/* --------------------------------- Options -------------------------------- */}
      <div className="grow">
        <span className=" select-none text-greeny text-base">Options:</span>
        {meal.options.length === 1 ? (
          <h3 className="text-sm font-medium">Only one option</h3>
        ) : (
          <ul className="text-sm font-medium">
            {meal.options.map(({ id, price, name }, i) => (
              <li className=" " key={id}>
                <span>
                  {i + 1}. {name}
                </span>
                <span>{price} $</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className="flex items-center justify-center gap-3 mt-3">
        <CustomButton size="sm" onClick={() => navigate(`/editor/${meal.id}`, { preventScrollReset: false })} variant="secondary">
          Edit <FilterIcon />
        </CustomButton>

        <CustomButton size="sm" onClick={() => openModal(<ConfirmDelete mealId={meal.id} />, 44)} variant="danger">
          Delete <Remove />
        </CustomButton>
      </footer>
    </li>
  );
};

export default AdminMealCard;
