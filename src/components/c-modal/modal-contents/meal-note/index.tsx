import { closeModal } from "@/stores/modal";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

const MealNote = () => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const delay = (ms: number = 3000): Promise<{ success: boolean }> =>
      new Promise((res) => setTimeout(() => res({ success: true }), ms));
    setIsSubmitting(true);

    const { success } = await delay();

    if (success) {
      toast.success("Your note has been sent successfully");
      closeModal();
    } else {
      toast.error("Something went wrong \n Pease try again!");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className=" p-4 grid gap-4">
      <label className="text-primary text-5xl font-bold" htmlFor="note">
        Add your special request
      </label>
      <textarea
        placeholder="Your note"
        name=""
        id="note"
        value={value}
        maxLength={30}
        className="border-1 bg-faq border-black/30 rounded-s p-4 outline-none"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
      <button
        disabled={value.length === 0 || isSubmitting}
        className="bg-secondary p-2 text-xl font-bold text-white rounded-s disabled:opacity-50 transition-opacity duration-200"
      >
        {!isSubmitting ? (
          <span> Send</span>
        ) : (
          <div className="w-7 mx-auto h-7 rounded-full border-2 border-white border-t-black/20 animate-spin"></div>
        )}
      </button>
    </form>
  );
};

export default MealNote;
