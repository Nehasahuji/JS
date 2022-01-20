// spread opearator
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`pasta is created using ${ing1},${ing2} and ${ing3}`);
  },
};

// normal use
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

// adding along with other elements
const num = [...numbers, 3, 4];
console.log(num);

// copy array to other
const copyArray = [...numbers];
console.log(copyArray);

// join two array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables : array,string,map .not objects\
// when we use print and pass function

const ingredients = [
  prompt('lets make pasta! Ingredient1'),
  prompt('Ingredient2'),
  prompt('ingredient3'),
];

restaurant.orderPasta(...ingredients);

const newRestaurant = {foundedIn:1998, ...restaurant,founder:'MAggie'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name='new one';
console.log(restaurantCopy);

