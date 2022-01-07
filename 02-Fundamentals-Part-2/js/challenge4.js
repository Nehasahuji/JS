'use strict'

const jonas = {
  firstName : 'jonsa',
  lastName:'Secander',
  birthYear:1991,
  job:'teacher',
  friends : ['michale','peter','Steven'],
  hasDriverLisence:false,
  
  // callAge : function (birthYear){
  //   return 2022-birthYear;
  // }

  callAge:function(){
    this.age = 2037-this.birthYear;
    return this.age;
  },

  haveDrivingLisence:function(){
        if(this.hasDriverLisence){
          return 'a';
        }
        else{
          return 'no';
        }
        
  },

  getSummary:function(){
    return `${this.firstName} is a ${this.callAge()} old teacher, and he has ${this.hasDriverLisence?'a':'no'} driving lisence`
  }


};

jonas.callAge();

// challenge jonas is a 46 year old teacher and he has a/no dirving lisecnce
console.log(`jonas is a ${jonas.age} old ${jonas.job} and he has ${jonas.haveDrivingLisence()} driving licence`);


console.log(jonas.getSummary());







