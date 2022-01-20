
// destructring array
const number = [1,2,3,4];
const [x,,y] = number;
console.log(x,y);

// destructring nested array
const numbers = [1,2,[3,4]];
const [i,,[j,k]] = numbers;
console.log(i,j,k);

// assigning default value to variables
const digits = [1,2,3];
const [s,t,u,v,w] = digits;
console.log(s,t,u,v);

const [a=1,b=1,c=1,d=1]=digits;
console.log(a,b,c,d);

// destrcting an array
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order:function(starterIndex,mainIndex){
           return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
}

let [first, ,third] = restaurant.categories;
console.log(first,third);

[first,third]=[third,first];
console.log(first,third);

const [starter,main]=restaurant.order(2,1);
console.log(starter,main);
