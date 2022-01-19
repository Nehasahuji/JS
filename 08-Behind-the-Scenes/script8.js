'use strict'
// primitive vs refrence;

let age=30;
let oldAge=age;
age=31;
console.log(age);
console.log(oldAge);

const Me = {
   age:30,
   name:'jonas'
};

const Friend=Me;
Me.age=10;
console.log(Friend);
console.log(Me);



