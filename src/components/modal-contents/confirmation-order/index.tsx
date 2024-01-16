import { MealType, OptionType } from "@/constants/types/meal";
import { addToBasket } from "@/stores/basket";
import { closeModal } from "@/stores/modal";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const ConfirmationOrder = ({
  selected,
  meal,
}: {
  selected: OptionType;
  meal: MealType;
}) => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddBasket = async (note: string) => {
    setIsSubmitting(true);
    let { options, ...mymeal } = meal;

    let newOrder = { ...mymeal, ...selected, note };

    // const { success } = await delay();
    const { success } = { success: true };

    if (success) {
      toast.success("Your note has been sent successfully");
      addToBasket(newOrder);
      closeModal();
    } else {
      toast.error("Something went wrong \n Pease try again!");
    }

    setIsSubmitting(false);

    // sm && openModal(<Basket />);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddBasket(value);
  };

  return (
    <div className="p-4">
      <h4 className="font-semibold text-2xl mb-4 text-center">
        You can take your note
      </h4>

      <form onSubmit={handleSubmit} className=" p-4 grid gap-4">
        <label className="text-primary text-5xl font-bold" htmlFor="note">
          Add your special request
        </label>

        <textarea
          placeholder="Your note"
          name=""
          id="note"
          rows={7}
          cols={30}
          value={value}
          // maxLength={30}
          className="border-1 bg-faq border-black/30 rounded-s p-4 outline-none"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
        />
        <button
          disabled={isSubmitting}
          className="bg-secondary p-2 text-xl font-bold text-white rounded-s disabled:opacity-50 transition-opacity duration-200"
        >
          {!isSubmitting ? (
            <span> Order {value ? "with" : "without"} Note</span>
          ) : (
            <div className="w-7 mx-auto h-7 rounded-full border-2 border-white border-t-black/20 animate-spin"></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConfirmationOrder;
