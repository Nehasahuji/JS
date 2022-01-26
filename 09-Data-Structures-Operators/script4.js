'use strict'
// Data needed for first part of the section
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
  orderPizza: function(firstIng,...otherIngredient){
      console.log(firstIng);
      console.log(otherIngredient);
  }
};

// rest pattern and parameter
// if ... is used before equal then it is a spread operator
// spread operator is used when it is values seprated by comma
// rest is used where we used variables seprated by comma
// if ... is used after equal then it is a rest operator

restaurant.orderPizza('onion','chees','panner');

const arr = [1,2,3,4];
const [a,b,...arr1] =arr;
console.log(a,b,arr1);


// destructing and rest with parameter
const [pizza,,risotto,...otherFood]= [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(otherFood);

// destructing and rest with objects
const { sat,...weekends }=restaurant.openingHours;

console.log(weekends);


const add = function(...numbers){
   let sum=0;
   for(let itr=0;itr<numbers.length;itr++){
       sum+=numbers[itr];
   }

   return sum;
}

console.log(add(2,4));
console.log(add(2,3,4,5));
console.log(add(2,3,4,5,6,7,8));