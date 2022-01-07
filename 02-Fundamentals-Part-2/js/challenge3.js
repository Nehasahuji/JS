'use strict'
const jonas = {
    firstName:"Jonas",
    lastName:"Schemandante",
    age:2022-1999,
    job:'teacher',
    friends : ['michale','peter','Steven']
};

// console.log(jonas);
console.log(jonas.firstName);

console.log(jonas['firstName']);


// const intrested = prompt("what do you want to know about jonas? Choose between firstName,lastName,age,job and friends");

// console.log(jonas[intrested]);

// if(intrested){
//     console.log(jonas[intrested]);
// }
// else{
//     console.log("undefined value select from  firstName,lastName,age,job and friends")
// }

jonas.location = 'portgal';
jonas['twitter'] = '@jonasSchedament';

console.log(jonas);

//Challenge 
//Jonas has three friends and his best friend is called michale


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)