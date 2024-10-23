// data.ts

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisl lorem. Praesent pharetra, sapien ut fringilla malesuada, nisi felis ullamcorper ex, eu consectetur elit dolor sed dolor. Praesent orci mi, auctor aliquet semper vitae, volutpat quis augue. Cras porta sapien nec pharetra laoreet. Sed at velit sit amet mauris varius volutpat sit amet id mauris. Maecenas vitae mattis ante. Morbi nulla quam, sagittis at orci eu, scelerisque auctor neque.";

const burguersCategory = {
  id: "1",
  name: "Hambúrgueres",
  imageUrl: "https://via.placeholder.com/150",
};

const pizzaCategory = {
  id: "2",
  name: "Pizza",
  imageUrl: "https://via.placeholder.com/150",
};

const japaneseFoodCategory = {
  id: "3",
  name: "Japonesa",
  imageUrl: "https://via.placeholder.com/150",
};

const brazilianFoodCategory = {
  id: "4",
  name: "Brasileira",
  imageUrl: "https://via.placeholder.com/150",
};

const burguerRestaurants = [
  {
    name: "The Burguer King",
    imageUrl: "https://via.placeholder.com/150",
    deliveryFee: 5,
    deliveryTimeMinutes: 30,
    categories: [burguersCategory],
  },
  {
    name: "Omni Burguer",
    imageUrl: "https://via.placeholder.com/150",
    deliveryFee: 5,
    deliveryTimeMinutes: 30,
    categories: [burguersCategory],
  },
  {
    name: "The Burguer Queen",
    imageUrl: "https://via.placeholder.com/150",
    deliveryFee: 0,
    deliveryTimeMinutes: 45,
    categories: [burguersCategory],
  },
  {
    name: "Burguer House",
    imageUrl: "https://via.placeholder.com/150",
    deliveryFee: 10,
    deliveryTimeMinutes: 20,
    categories: [burguersCategory],
  },
];

const burguerProducts = [
  {
    id: "1", // Adicionando ID
    name: "Cheese Burguer",
    price: 30,
    description: description,
    discountPercentage: 10,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[0], // Conectando o produto ao restaurante
    category: burguersCategory,
  },
  {
    id: "2",
    name: "Double Cheese Burguer",
    price: 40,
    description: description,
    discountPercentage: 7,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[1],
    category: burguersCategory,
  },
  {
    id: "3",
    name: "Bacon Burguer",
    price: 35,
    description: description,
    discountPercentage: 5,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[2],
    category: burguersCategory,
  },
  {
    id: "4",
    name: "Double Bacon Burguer",
    price: 45,
    description: description,
    discountPercentage: 10,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[3],
    category: burguersCategory,
  },
  {
    id: "5",
    name: "Chicken Burguer",
    price: 30,
    description: description,
    discountPercentage: 7,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[0],
    category: burguersCategory,
  },
  {
    id: "6",
    name: "Double Chicken Burguer",
    price: 40,
    description: description,
    discountPercentage: 5,
    imageUrl: "https://picsum.photos/150",
    restaurant: burguerRestaurants[1],
    category: burguersCategory,
  },
];

export {
  burguersCategory,
  burguerRestaurants,
  burguerProducts,
  pizzaCategory,
  japaneseFoodCategory,
  brazilianFoodCategory,
};
