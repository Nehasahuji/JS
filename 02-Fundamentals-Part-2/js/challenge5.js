/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.*/

"use strict";

const Mark = {
  name: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.weight /(this.height* this.height);
    return this.BMI.toFixed(2);
  },
};

const John = {
  name: "John Smit",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI.toFixed(2);
  },
};

Mark.calcBMI();
John.calcBMI();
// console.log(Mark.calcBMI());
// console.log(John.calcBMI());

if (Mark.BMI>John.BMI) {
  console.log(`${Mark.name}'s BMI(${Mark.BMI.toFixed(2)})is higher than ${John.name}'s (${John.BMI.toFixed(2)})`) 
}
else if(Mark.BMI<John.BMI) {
    console.log(`${John.name}'s BMI (${John.BMI.toFixed(2)}) is higher than   (${Mark.BMI.toFixed(2)})`)
}
else{
    console.log(`both BMI are equal`)
}
