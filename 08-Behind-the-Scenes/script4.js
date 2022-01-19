'use strict'

// this keyword in global scope
console.log(this);

// this keyword in function we are getting undefind as there is no owner of this function
const calAge= function (birthyear){
    console.log(this);
    return 2022-birthyear;
}

console.log(calAge(1997));


// Arrow function does not have this keyword it will call this keyword of parent 

const calAgeArrow= (birthyear) =>{
    console.log(this);
    return 2022-birthyear;
}

console.log(calAgeArrow(1997));


// this keword with the methods

const jonas = {
   year:1991,
   calAge: function(){
     console.log(this);
     console.log(2021-this.year)
   }
};

jonas.calAge(); ///return the owner object

const madila = { 
  year:1996
};

madila.calAge=jonas.calAge;
madila.calAge(); /// this keyword will call the method from which object  it is calling and at the time of calling


const f = jonas.calAge;
// f(); Cannot read properties of undefined (reading 'year') 