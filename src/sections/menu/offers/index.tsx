import { offer, plus } from "@//assets/images";

const offers = [
  {
    category: "Burgers",
    id: 1,
    offers: [
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 1,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 2,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 3,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 4,
      },
    ],
  },
  {
    category: "Fries",
    id: 2,
    offers: [
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 1,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 2,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 3,
      },
      {
        img: offer,
        title: "Royal Cheese Burger with extra Fries",
        price: "AZN 33.33",
        id: 4,
      },
    ],
  },
];

const Offers = () => {
  return (
    <ul>
      {offers.map((category, i) => (
        <li key={i} className="container mb-20">
          <h3 className="text-primary font-bold text-5xl mb-10">
            {category.category}
          </h3>

          <ul className="grid gap-x-5 gap-y-10 grid-cols-3">
            {category?.offers.map((offer) => (
              <li
                key={offer.id}
                className="flex gap-4 items-start border-1 border-black/10  rounded-xl p-6 offer-shadow"
              >
                <div className="grid h-full text-text p-1 flex-1">
                  <h1 className="font-semibold text-xl">{offer.title}</h1>

                  <p className="text-sm">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>

                  <span className="text-lg font-bold">{offer.price}</span>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={offer.img}
                    alt="offer"
                    className="object-cover min-w-48 min-h-48 "
                  />
                  <button className="absolute bg-white/90 rounded-[45px_0_12px_0] right-0 bottom-0 ">
                    <img
                      src={plus}
                      alt="pls"
                      className="p-[18px_15px_14px_24px]"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Offers;
