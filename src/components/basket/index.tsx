const Basket = () => {
  // const basketItems = useBasketStore((state) => state.elements);
  // const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <div className="bg-white rounded-xl  offer-shadow p-4">
      <h3 className="text-text font-bold text-4xl mb-5">Basket</h3>

      {/* <ul className="grid gap-3">
        {basketItems?.map((item, i) => (
          <BasketItem quantity={item.quantity} id={item.id} key={i} />
        ))}
      </ul>

      <p className="bg-primary rounded-lg border-1 border-black/10 mx-2 my-5 flex items-center justify-between ">
        <span className="text-white font-semibold text-xl px-4 py-5 whitespace-nowrap">Total to pay</span>
        <span className="text-white font-semibold text-4xl px-4 py-5">${totalPrice.toFixed(2)}</span>
      </p>
      <button onClick={clearBasket} className="bg-text text-white w-full rounded-lg border-1 border-black/10 p-2 ">
        Clear Basket
      </button> */}
    </div>
  );
};

export default Basket;
