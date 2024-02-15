import { burger, cheese, chicken, condiment, fries, hamburger, lil_pizza, meat, salad, tuna } from "@/assets/images";
import { SpecialMealType } from "../types/spcieal-meal";

export const meals: { [key: string]: SpecialMealType[] } = {
  pizza: [
    // /* ---------------------------------- Size ---------------------------------- */
    {
      categoryName: "Size",
      options: [
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
    // /* ------------------------------- Ingredients ------------------------------ */
    {
      categoryName: "Ingredients",
      sub_categories: [
        {
          title: "Meat",
          imgTitle: hamburger,
          type: "radio",
          options: [
            {
              img: meat,
              name: "Beef",
              id: "beef",
              price: 18.99,
            },
            {
              name: "Chicken",
              id: "chicken",
              img: chicken,
              price: 14.99,
            },
            {
              name: "Tuna",
              id: "tuna",
              img: tuna,
              price: 22.99,
            },
          ],
        },
        {
          title: "Cheese",
          imgTitle: cheese,
          type: "checkbox",
          options: [
            {
              name: "Cheader",
              id: "cheader",
              price: 0.5,
            },
            {
              name: "Mozarella",
              id: "mozarella",
              price: 1.5,
            },
            {
              name: "American",
              id: "american",
              price: 2.5,
            },
            {
              name: "Blue Cheese",
              id: "blue_cheese",
              price: 3.5,
            },
            {
              name: "Pepper Jack",
              id: "pepper_jack",
              price: 4.5,
            },
          ],
        },
        {
          title: "Vegetable",
          imgTitle: salad,
          type: "checkbox",
          options: [
            {
              name: "Peppers",
              id: "peppers",
              price: 5.5,
            },
            {
              name: "Mushrooms",
              id: "mushrooms",
              price: 6.5,
            },
            {
              name: "Onions",
              id: "onions",
              price: 7.5,
            },
            {
              name: "Tomato",
              id: "tomato",
              price: 8.5,
            },
          ],
        },
      ],
    },
    //  /* ------------------------- Condiments and Extrass ------------------------- */
    {
      categoryName: "Extras",
      sub_categories: [
        {
          title: "Condiments",
          imgTitle: condiment,
          type: "checkbox",
          options: [
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
          title: "Extras",
          imgTitle: fries,
          type: "radio",
          options: [
            {
              img: fries,
              name: "Small",
              id: "small",
              price: 7.99,
            },
            {
              name: "Medium",
              id: "medium",
              img: fries,
              price: 10.99,
            },
            {
              name: "Large",
              id: "large",
              img: fries,
              price: 12.99,
            },
          ],
        },
        {
          title: "Souce",
          imgTitle: condiment,
          type: "checkbox",
          options: [
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
    },
  ],
  //  /* ------------------------- Burger ------------------------- */

  burger: [
    {
      categoryName: "Size",
      options: [
        { img: burger, name: "Reg", des: "14 cm", id: "reg", price: 5.99 },
        { img: burger, name: "Large", des: "18 cm", id: "large", price: 7.99 },
        { img: burger, name: "XL", des: "20 cm", id: "xl", price: 9.99 },
        { img: burger, name: "XXL", des: "25 cm", id: "xxl", price: 12.99 },
      ],
    },
    {
      categoryName: "Ingredients",
      sub_categories: [
        {
          title: "Meat",
          imgTitle: hamburger,
          type: "radio",
          options: [
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
          ],
        },
        {
          title: "Cheese",
          imgTitle: cheese,
          type: "checkbox",
          options: [
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
          title: "Vegetable",
          imgTitle: salad,
          type: "checkbox",
          options: [
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
    },
    //  /* ------------------------- Condiments and Extrass ------------------------- */
    // {
    //   categoryName: "Condiments & Extras",
    //   sub_categories: [
    //     {
    //       title: "Condiments",
    //       imgTitle: condiment,
    //       type: "checkbox",
    //       options: [
    //         {
    //           name: "Ketchup",
    //           id: "ketchup",
    //           price: 1.5,
    //         },
    //         {
    //           name: "Mayonnaise",
    //           id: "mayonnaise",
    //           price: 1.5,
    //         },
    //         {
    //           name: "Mustard",
    //           id: "mustard",
    //           price: 1.5,
    //         },
    //         {
    //           name: "BBQ",
    //           id: "bbq",
    //           price: 1.5,
    //         },
    //         {
    //           name: "Garlic",
    //           id: "garlic",
    //           price: 1.5,
    //         },
    //       ],
    //     },
    //     {
    //       title: "Extras",
    //       imgTitle: fries,
    //       type: "checkbox",
    //       options: [
    //         {
    //           name: "Garlic Butter Drizzle",
    //           id: "garlic_butter_drizzle",
    //           price: 1.0,
    //         },
    //         { name: "Red Pepper Flakes", id: "red_pepper_flakes", price: 0.25 },
    //         { name: "Balsamic Glaze", id: "balsamic_glaze", price: 0.5 },
    //       ],
    //     },
    //   ],
    // },
  ],
};
