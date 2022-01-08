/*Bonus:
 Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

function calcAverage(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum=sum+arr[i];
    }
    return sum/arr.length;
}

const number = [1,2,3,4,5,6];
console.log(calcAverage(number));

