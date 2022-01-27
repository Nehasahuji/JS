"use strict"
// for of loop

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  };

  const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
  console.log(menu);

// for of loop
  for(const item of menu){
      console.log(item);
  }

// using something new
for(const items of menu.entries()){
   console.log(items);
}


for(const items of menu.entries()){
    // console.log(`${items[0]}  ${items[1]}`);
 }

// after destruction
 for(const [Index,element] of menu.entries()){
    console.log(`${Index+1}. ${element}`);
 }

 

