// const markWeight=95;
// const johnWeight=85;
// const markHeight=1.88;
// const johnHeight=1.76;

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const johnBmi = (johnWeight / johnHeight ** 2).toFixed(2);

const markBmi = (markWeight / markHeight ** 2).toFixed(2);

// const markHigherBMI = johnBmi>markBmi;
// console.log(markHigherBMI);

// if(markBmi>johnBmi){
//     console.log("Mark's BMI is higher than John's");
// }
// else{
//    console.log("John's BMI is higher than Mark's!");
// }

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's (${johnBmi}) BMI is higher than Mark's BMI (${markBmi})`);
}
