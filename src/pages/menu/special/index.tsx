const options = [
  {
    id: 1,
    name: "Pizza",
  },
  {
    id: 2,
    name: "Burger",
  },
];

const SpecialMeal = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* {options.map((option) => (
        <CustomButton
          variant="success"
          key={option.id}
          onClick={() => openModal(option.id === 2 ? <PreperaringSpecialMeal mealId={2} /> : <SpecialMealForm />, 80)}
          className={`rounded-lg text3  font-bold text-xl flex items-center py-2 px-3 border-2 border-black/10`}
        >
          <span className={`mr-2`}>{option.name}</span>
        </CustomButton>
      ))} */}
    </div>
  );
};

export default SpecialMeal;
