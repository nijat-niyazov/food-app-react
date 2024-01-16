const options = {
  pizza: [
    {
      category: "Vegitable Toppings",
      toppings: [
        {
          name: "Cheese",
          id: "cheese",
        },
        {
          name: "Gobelek",
          id: "gobelek",
        },
        {
          name: "Pamidor",
          id: "pamidor",
        },
        {
          name: "Pendir",
          id: "pendir",
        },
      ],
    },
    {
      category: "Meat Toppings",
      toppings: [
        {
          name: "Chicken",
          id: "chicken",
        },
        {
          name: "Beef",
          id: "beef",
        },
        {
          name: "Pepperonu",
          id: "pepperonu",
        },
      ],
    },
    {
      category: "Seafood Toppings",
      toppings: [
        {
          name: "Tuna",
          id: "tuna",
        },
        {
          name: "Prawns",
          id: "prawns",
        },
      ],
    },
  ],
  burger: [
    {
      category: "Cheese Toppings",
      toppings: [
        {
          name: "Cheese",
          id: "cheese",
        },
        {
          name: "Sogan",
          id: "sogan",
        },
        {
          name: "Pamidor",
          id: "pamidor",
        },
      ],
    },
    {
      category: "Meat Toppings",
      toppings: [
        {
          name: "Chicken",
          id: "chicken",
        },
        {
          name: "Beef",
          id: "beef",
        },
      ],
    },
  ],
};

const PreperaringSpecialMeal = ({ mealId }: { mealId: number }) => {
  let key: keyof typeof options;

  switch (mealId) {
    case 1:
      key = "pizza";
      break;
    case 2:
      key = "burger";
      break;

    default:
      key = "pizza";
  }

  return (
    <div className="px-40 py-14 ">
      <div className="grid gap-20">
        {options[key].map((option) => (
          <ul className="grid grid-cols-3 relative gap-y-4  place-items-start justify-between border-1 border-black/30 px-6 py-[70px] rounded-xl">
            <li className="absolute top-0 left-20 -translate-y-1/2">
              <div className="bg-text text-white rounded-r-xl font-bold text-3xl relative py-4 px-14">
                <div className="h-20 absolute left-0 -translate-x-1/2 -translate-y-1/2  w-20  rounded-full bg-primary"></div>
                <p className="text-center">{option.category} </p>
              </div>
            </li>

            {option.toppings.map((topping) => (
              <li
                key={topping.id}
                className="flex items-center flex-row-reverse gap-2 font-bold text-text text-3xl"
              >
                <label htmlFor={topping.id} className="select-none">
                  {topping.name}{" "}
                </label>
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  name={topping.id}
                  id={topping.id}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PreperaringSpecialMeal;
