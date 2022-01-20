// object destruction
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
  
  order: function(startIndex,mainIndex){
      return [starterMenu[startIndex],mainMenu[mainIndex]];
  },

  orderDelievry: function({address='new address',startIndex=2,mainIndex,time}){
console.log(`order delivered ${this.starterMenu[startIndex]} ,${this.mainMenu[mainIndex]} is recieved at ${time="8:00"} at ${address}

`);
  }

};

restaurant.orderDelievry({
  
  address:'Allishan furniture pallace kandeli narsinghpur',
  time:'08:00',
  startIndex:1,
  mainIndex:2
});

restaurant.orderDelievry({
  startIndex:1,
  mainIndex:2
});

//normal destruction
const { starterMenu, mainMenu } = restaurant;
console.log(starterMenu, mainMenu);

// rename the name of the objects in destruction of objects

const { starterMenu: starter, mainMenu: mainCourse } = restaurant;
console.log(starter, mainCourse);

// along with the default paramter in the object destruction

const {
  menu = {},
  starterMenu: starterMenuData,
  mainMenu: mainMenuData,
} = restaurant;
console.log(menu, starterMenuData, mainMenuData);

//  nested object

const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

// mutating variables
let a = 11;
let b = 12;

const obj = { a: 10, b: 12, c: 13 };
({ a, b } = obj);
console.log(a, b);
 