'use stricrt'

// var firstName = 'Madila';

// if we will create an object using var function then it is used in the arrow fuction because this is added in the window object

const jonas = {
  firstName:'jonas',
  year:1996,

  calAge :function(){
      console.log(this);
      console.log(2022-this.year);
  },

//   arrow function will always call this variable of parent scope
// arrow function do not have their own arrow scope
  greet: ()=>{
   console.log(`Hi ${this.firstName}`);
  }

};

jonas.calAge();
jonas.greet();


// Good practice is to not to used arrow functions in method because it will call