'use strict'
// enhanced object literals in ES6

const weeksDays = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours={
  //  use an an argument here
  [weeksDays[4]]: {
    open: 12,
    close: 22,
  },
  [weeksDays[5]]: {
    open: 11,
    close: 23,
  },
  [weeksDays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
   
    // simplified methods
    order(startIndex,mainIndex){
        return [starterMenu[startIndex],mainMenu[mainIndex]];
    },
  
    orderDelievry({address='new address',startIndex=2,mainIndex,time}){
  console.log(`order delivered ${this.starterMenu[startIndex]} ,${this.mainMenu[mainIndex]} is recieved at ${time="8:00"} at ${address}
  
  `);
    }
  
  };