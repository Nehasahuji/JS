/*Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// problem 
// 1. given an array
// 2. print the data in string formate 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."


// approch
// 1.Create an array temprature
const tempratures = [12, 5, -5, 0, 4];

const n = tempratures.length;
console.log(n);
// 2.Create an function to take array as an input and print an output in given formate
function printForecast (tempratures){
    let str='';
    for(let i=0;i<n;i++){
        
        str = str +` ${tempratures[i]}°C in ${i+1} days ...`
    }

    return str;

}

console.log(printForecast(tempratures));






