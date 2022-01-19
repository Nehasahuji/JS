'use strict'

// using refrence

const addExp = function (a,b){
    console.log(arguments)
    return a+b;
}

// arguments keword don't work on array function 
const addArrow = (a,b)=>{
    console.log(arguments);
    return a+b;
}

addExp(2,4);
addArrow(2,4);