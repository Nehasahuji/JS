// looping objects : object keys, values,entries

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
  };

// Object.keys
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let str = `we are open in ${properties.length} days  ` ;
for(const day of properties){
    str+=`${day}, `;
}

console.log(str);

// Object.values

const values = Object.values(restaurant.openingHours);
console.log(values);

// Object.enteries

const enteries = Object.entries(restaurant.openingHours);
for(const x of enteries){
    console.log(x)
}

for(const [key,{open,close}] of enteries){
    console.log(`we open on ${key} at ${open} and closed at ${close}`);
}