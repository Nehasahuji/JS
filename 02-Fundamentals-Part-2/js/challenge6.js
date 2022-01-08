/*Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
*/

const callTip = (bill)=>bill>=50&&bill<=300?.15:.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];

const tips = [];

for(let i=0;i<bills.length;i++){
     tips[i]=bills[i]*callTip(bills[i]);
}

const total = [];

total[0]=bills[0]+tips[0];
for(let i=0;i<tips.length;i++){
   total[i]=bills[i]+tips[i];
}

console.log(total);

