'use strict';
// ES2020
// Optional Chaining ?.
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

  // simplified methods
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelievry({ address = 'new address', startIndex = 2, mainIndex, time }) {
    console.log(`order delivered ${this.starterMenu[startIndex]} ,${
      this.mainMenu[mainIndex]
    } is recieved at ${(time = '8:00')} at ${address}

`);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // ?? nulishing operator
  // ?optional chaining
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`restaurant opens at ${day} at ${open}`);
}

// methods

const result = restaurant.order?.(1,2);
console.log(result);

const rasiotto = restaurant.orderRisotto?.(1,2);
console.log(rasiotto);

// Array
const users = [{
  'name':'jonas',
  'email':'jonas@gmail.com'
}]

console.log(users[0]?.name??"user is not defined");
console.log(users[1]?.name??"user is not defined");
