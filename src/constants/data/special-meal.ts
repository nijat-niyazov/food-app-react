import {
  burger,
  cheese,
  chicken,
  hamburger,
  lil_pizza,
  meat,
  tuna,
} from "@/assets/images";

export const options = {
  pizza: [
    {
      categoryName: "Size",
      choices: [
        {
          img: lil_pizza,
          name: "Small",
          des: "10 inches",
          id: "small",
          price: 8.99,
        },
        {
          img: lil_pizza,
          name: "Medium",
          des: "12 inches",
          id: "medium",
          price: 11.99,
        },
        {
          img: lil_pizza,
          name: "Large",
          des: "14 inches",
          id: "large",
          price: 14.99,
        },
      ],
    },
    {
      categoryName: "Ingredients",
      options: [
        {
          heading: "Meat",
          imgHeading: hamburger,
          type: "radio",
          choices: [
            {
              img: meat,
              name: "Beef",
              id: "beef",
              price: 22.99,
            },
            {
              name: "Chicken",
              id: "chicken",
              img: chicken,
              price: 22.99,
            },
            {
              name: "Tuna",
              id: "tuna",
              img: tuna,
              price: 22.99,
            },
            // {
            //   name: "Goki",
            //   id: "goki",
            //   img: tuna,
            // },
          ],
        },
        {
          heading: "Cheese",
          imgHeading: cheese,
          type: "checkbox",
          choices: [
            {
              name: "Cheader",
              id: "cheader",
              price: 1.5,
            },
            {
              name: "Mozarella",
              id: "mozarella",
              price: 1.5,
            },
            {
              name: "American",
              id: "american",
              price: 1.5,
            },
            {
              name: "Blue Cheese",
              id: "blue_cheese",
              price: 1.5,
            },
            {
              name: "Pepper Jack",
              id: "pepper_jack",
              price: 1.5,
            },
          ],
        },
        {
          heading: "Vegitable",
          type: "checkbox",
          choices: [
            {
              name: "Peppers",
              id: "peppers",
              price: 1.5,
            },
            {
              name: "Mushrooms",
              id: "mushrooms",
              price: 1.5,
            },
            {
              name: "Onions",
              id: "onions",
              price: 1.5,
            },
            {
              name: "Tomato",
              id: "tomato",
              price: 1.5,
            },
          ],
        },
      ],
    }, // Ingredients
    {
      categoryName: "Condiments & Extras",
      options: [
        {
          heading: "Condiments",
          type: "checkbox",
          choices: [
            {
              name: "Ketchup",
              id: "ketchup",
              price: 1.5,
            },
            {
              name: "Mayonnaise",
              id: "mayonnaise",
              price: 1.5,
            },
            {
              name: "Mustard",
              id: "mustard",
              price: 1.5,
            },
            {
              name: "BBQ",
              id: "bbq",
              price: 1.5,
            },
            {
              name: "Garlic",
              id: "garlic",
              price: 1.5,
            },
          ],
        },
        {
          heading: "Extras",
          type: "checkbox",
          choices: [
            {
              name: "Garlic Butter Drizzle",
              id: "garlic_butter_drizzle",
              price: 1.0,
            },
            { name: "Red Pepper Flakes", id: "red_pepper_flakes", price: 0.25 },
            { name: "Balsamic Glaze", id: "balsamic_glaze", price: 0.5 },
          ],
        },
      ],
    }, // Condiments and Extrass
  ],

  burger: [
    {
      categoryName: "Size",
      choices: [
        {
          img: burger,
          name: "Regular",
          des: "14 cm",
          id: "regular",
          price: 5.99,
        },
        { img: burger, name: "Large", des: "18 cm", id: "large", price: 7.99 },
        { img: burger, name: "XL", des: "20 cm", id: "xl", price: 9.99 },
        { img: burger, name: "XXL", des: "25 cm", id: "xxl", price: 12.99 },
      ],
    }, // SIZE
    {
      categoryName: "Ingredients",
      options: [
        {
          heading: "Meat",
          imgHeading: hamburger,
          type: "radio",
          choices: [
            {
              name: "Beef",
              id: "beef",
              img: meat,
            },
            {
              name: "Chicken",
              id: "chicken",
              img: chicken,
            },
            {
              name: "Tuna",
              id: "tuna",
              img: tuna,
            },
            // {
            //   name: "Goki",
            //   id: "goki",
            //   img: tuna,
            // },
          ],
        },
        {
          heading: "Cheese",
          imgHeading: cheese,
          type: "checkbox",
          choices: [
            {
              name: "Cheader",
              id: "cheader",
            },
            {
              name: "Mozarella",
              id: "mozarella",
            },
            {
              name: "American",
              id: "american",
            },
            {
              name: "Blue Cheese",
              id: "blue_cheese",
            },
            {
              name: "Pepper Jack",
              id: "pepper_jack",
            },
          ],
        },
        {
          heading: "Vegitable",
          type: "checkbox",
          choices: [
            {
              name: "Peppers",
              id: "peppers",
            },
            {
              name: "Mushrooms",
              id: "mushrooms",
            },
            {
              name: "Onions",
              id: "onions",
            },
            {
              name: "Tomato",
              id: "tomato",
            },
          ],
        },
      ],
    }, // Ingredients
    {
      categoryName: "Condiments & Extras",
      options: [
        {
          heading: "Condiments",
          type: "checkbox",
          choices: [
            {
              name: "Ketchup",
              id: "ketchup",
            },
            {
              name: "Mayonnaise",
              id: "mayonnaise",
            },
            {
              name: "Mustard",
              id: "mustard",
            },
            {
              name: "BBQ",
              id: "bbq",
            },
            {
              name: "Garlic",
              id: "garlic",
            },
          ],
        },
        {
          heading: "Extras",
          type: "checkbox",
          choices: [
            {
              name: "Garlic Butter Drizzle",
              id: "garlic_butter_drizzle",
              price: 1.0,
            },
            { name: "Red Pepper Flakes", id: "red_pepper_flakes", price: 0.25 },
            { name: "Balsamic Glaze", id: "balsamic_glaze", price: 0.5 },
          ],
        },
      ],
    }, // Condiments and Extrass
  ],
};
