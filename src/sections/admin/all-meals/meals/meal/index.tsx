import { StorageImage } from "@/components";
import { CustomButton } from "@/components/ui";
import { MealType } from "@/constants/types/meal";
import { Link } from "react-router-dom";

const AdminMealCard = ({ meal }: { meal: MealType }) => {
  // console.log({ meal });

  return (
    <li className="flex flex-col justify-between   gap-2 p-2 px-4 border-1 border-black/20 rounded-md ">
      {/* ---------------------------------- Image --------------------------------- */}
      <StorageImage path="menu" src={meal.img} alt="img" className="object-cover rounded-full mx-auto w-28 h-28" />

      {/* --------------------------------- Title --------------------------------- */}
      <header className="font-semibold text-lg">
        <span className="underline select-none text-secondary text-base font-normal">Title :</span> <br />
        <h3>{meal.title}</h3>
      </header>

      {/* -------------------------------- Category -------------------------------- */}
      <p className="text-base font-medium ">
        <span className="underline select-none text-secondary text-base font-normal"> Category :</span> <br />
        {meal.category_name}
      </p>
      {/* ------------------------------- Description ------------------------------ */}
      <p className="text-sm font-medium ">
        <span className="underline select-none text-secondary text-base font-normal"> Description :</span> <br />
        {meal.description}
      </p>
      {/* --------------------------------- Options -------------------------------- */}
      <div className="grow">
        <span className="underline select-none text-secondary text-base">Options :</span>
        {meal.options.length === 1 ? (
          <h3 className="text-sm font-medium">Only one option</h3>
        ) : (
          <ul className="text-sm font-medium">
            {meal.options.map(({ id, price, name }, i) => (
              <li className="flex items-center justify-between " key={id}>
                <span>
                  {i + 1}. {name}
                </span>
                <span>{price} $</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer>
        <Link to={`/editor/${meal.id}`}>
          <CustomButton variant="secondary" className="mt-3">
            Edit
          </CustomButton>
        </Link>
        <CustomButton onClick={() => alert("Are you sure?")} className="mt-1" variant="danger">
          Delete
        </CustomButton>
      </footer>
    </li>
  );
};

export default AdminMealCard;
