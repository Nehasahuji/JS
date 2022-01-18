// declaration and calling of function 


console.log(addDec(2,5));

// we can not call arrow function and function declaration befor they are declared
console.log(addRef(2,5));
console.log(addArrow(2,5));

function addDec(a,b){
    return a+b;
}


// finction defination
const addRef = function(a,b){
    return a+b;
}

// arrow function
const addArrow=(a,b)=>a+b;